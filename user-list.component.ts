// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    template: `
    <div *ngFor="let user of users">
      <p>{{ user.id }} - {{ user.name }}</p>
      <button (click)="navigateToUserDetails(user.id)">User Details</button>
    </div>
  `,
})
export class UserListComponent implements OnInit {
    users: any[];

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit() {
        this.userService.getUsers().subscribe(users => this.users = users);
    }

    navigateToUserDetails(userId: number): void {
        this.router.navigate(['/user-details', userId]);
    }
}
