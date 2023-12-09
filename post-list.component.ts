import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { Post } from './post.model'; // Імпорт відповідного типу для посту

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private route: ActivatedRoute, private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserPosts(userId).subscribe(posts => {
      this.posts = posts;
    });
  }
}
