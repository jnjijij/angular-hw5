// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/users`);
    }

    getUserById(userId: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/users/${userId}`);
    }

    getPostsByUser(userId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/users/${userId}/posts`);
    }

    getPostById(postId: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/posts/${postId}`);
    }

    getCommentsByPost(postId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/posts/${postId}/comments`);
    }
}
