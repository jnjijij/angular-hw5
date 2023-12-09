import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(userId: string) {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
  }

  getUserPosts(userId: string) {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?userId=${userId}`);
  }
    interface User {
  id: number;
  name: string;
  email: string;

}

interface Post {
  id: number;
  title: string;
  body: string;
 
}
}
