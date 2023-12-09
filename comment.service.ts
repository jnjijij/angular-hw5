import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPostComments(postId: string) {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments?postId=${postId}`);
  }
}
