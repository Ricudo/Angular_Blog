import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../shared/interfaces";
import {PostsService} from "../../shared/posts.service";
import {AlertService} from "../shared/services/alert.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private postsService: PostsService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    })
  }

  get title(): AbstractControl {
    return this.form.get('title')!;
  }

  get author(): AbstractControl {
    return this.form.get('author')!;
  }

  submit() {
    if(this.form.invalid) {
      return;
    }

    const post: Post = {
      author: this.form.value.author,
      text: this.form.value.text,
      title: this.form.value.title,
      date: new Date(),
    }

    this.postsService.create(post).subscribe(() => {
      this.form.reset();
      this.alertService.success('Post was created!')
    })
  }
}
