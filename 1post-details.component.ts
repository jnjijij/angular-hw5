// post-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
    selector: 'app-post-details',
    template: `
    <div *ngIf="post">
      <p>Post Details:</p>
      <p>{{ post.id }} - {{ post.title }}</p>
      <!-- Додайте інші поля поста -->
      <div *ngFor="let comment of comments">
        <p>{{ comment.body }}</p>
      </div>
    </div>
  `,
})
export class PostDetailsComponent implements OnInit {
    post: any;
    comments: any[];

    constructor(private route: ActivatedRoute, private userService: UserService) {}

    ngOnInit() {
        const postId = this.route.snapshot.params['id'];
        this.userService.getPostById(postId).subscribe(post => this.post = post);
        this.userService.getCommentsByPost(postId).subscribe(comments => this.comments = comments);
    }
}
