import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {environment} from "../../environments/environment";
import {Post} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.fbDbUrl}/posts.json`, post) // .json -> FireBase rule
      .pipe(
        map( (resp: Post) => {
          return {
            ...post,
            id: resp.name,
            date: new Date(post.date)
          }
        })
      )
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
      .pipe(
        map((resp: {[key: string]: any}) => {
          return Object
            .keys(resp)
            .map(key => ({
              ...resp[key],
              id: key,
              date: new Date(resp[key].date)
            }))
        })
      )
  }

  getById(id: string): Observable<Post>  {
    return this.http.get<Post>(`${environment.fbDbUrl}/posts/${id}.json`)
      .pipe(
        map( (post: Post) => {
          return {
            ...post,
            id, //id: id
            date: new Date(post.date)
          }
        })
      )
  }

  remove(id: string){
    return this.http.delete(`${environment.fbDbUrl}/posts/${id}.json`)
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.fbDbUrl}/posts/${post.id}.json`, post)
  }
}
