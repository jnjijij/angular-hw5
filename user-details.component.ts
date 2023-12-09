import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    user: any;

    constructor(private route: ActivatedRoute, private userService: UserService) { }

    ngOnInit() {
        const userId = this.route.snapshot.paramMap.get('id');
        this.userService.getUser(userId).subscribe(user => {
            this.user = user;
        });
    }
}
