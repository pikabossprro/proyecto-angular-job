import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getReseñas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getReseña(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  createReseña(reseña: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, reseña);
  }

  updateReseña(id: number, reseña: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/posts/${id}`, reseña);
  }

  deleteReseña(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }
}
