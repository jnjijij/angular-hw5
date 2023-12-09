// user-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model'; // Імпорт відповідного типу для користувача
import { Post } from './post.model'; // Імпорт відповідного типу для посту

@Component({
  selector: 'app-user-details',
  template: `
  <div *ngIf="user">
   <p>User Details:</p>
   <p>{{ user.id }} - {{ user.name }}</p>
   <!-- Додайте інші поля користувача -->
   <button (click)="loadPosts()">Posts of Current User</button>
   <div *ngFor="let post of posts">
    <p>{{ post.title }}</p>
    <button (click)="navigateToPostDetails(post.id)">Post Details</button>
   </div>
  </div>
 `,
})
export class UserDetailsComponent implements OnInit {
  user: User;
  posts: Post[];

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(user => this.user = user);
  }

  loadPosts(): void {
    const userId = this.route.snapshot.params['id'];
    this.userService.getPostsByUser(userId).subscribe(posts => this.posts = posts);
  }

  navigateToPostDetails(postId: number): void {
    this.router.navigate(['/post-details', postId]);
  }
}
