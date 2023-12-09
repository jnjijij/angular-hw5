import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './post.service';
import { CommentService } from './comment.service';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
    post: any;
    comments: any[];

    constructor(private route: ActivatedRoute, private postService: PostService, private commentService: CommentService) { }

    ngOnInit() {
        const postId = this.route.snapshot.paramMap.get('id');
        this.postService.getPost(postId).subscribe(post => {
            this.post = post;
        });
        this.commentService.getPostComments(postId).subscribe(comments => {
            this.comments = comments;
        });
    }
}
