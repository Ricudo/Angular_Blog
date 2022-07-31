import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FbAuthResponse, User} from "../../../shared/interfaces";
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({providedIn: 'root'})
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  get token(): string | undefined {
    const expDate = new Date( localStorage.getItem('fb-token-exp')! );
    if(new Date() > expDate) {
      this.logout();
      return undefined;
    }
    return localStorage.getItem('fb-token')!;
  }
  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<FbAuthResponse> {
    user.returnSecureToken = true;
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
      user
    ).pipe(
      tap(this.setToken),
      catchError(this.handleError.bind(this))
    )
  }

  logout() {
    this.setToken(null)
  }

  private handleError(error: any): Observable<any> {
    const {message} = error.error.error
    switch(message) {
      case 'USER_DISABLED':
        this.error$.next('User is disabled');
        break
      case 'INVALID_PASSWORD':
        this.error$.next('Wrong password');
        break
      case 'EMAIL_NOT_FOUND':
        this.error$.next("User doesn't exist");
        break
    }

    return throwError(error)
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(resp: any) {
    if(resp) {
      const expDate = new Date(new Date().getTime() + +resp.expiresIn * 1000);
      localStorage.setItem('fb-token', resp.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear()
    }
  }
}
