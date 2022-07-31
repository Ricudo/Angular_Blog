import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../shared/posts.service";
import {Subscription, switchMap} from "rxjs";
import {Post} from "../../shared/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  post!: Post;
  submited = false;
  uSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params, index: number) => {
      return this.postsService.getById(params['id'])
    })).subscribe((post:Post) => {
      this.post = post;
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      })
    })
  }

  get title() {
    return this.form.get('title')!;
  }

  submit() {
    if(this.form.invalid) {
      return
    }
    this.submited = true;

    this.uSub = this.postsService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title,
    }).subscribe(() => {
      this.submited = false;
      this.alertService.success('Post was updated!');
    })
  }

  ngOnDestroy() {
    if(this.uSub) {
      this.uSub.unsubscribe();
    }
  }
}
