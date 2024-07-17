import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // Método para obtener todas las reseñas
  getReseñas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }

  // Método para obtener una reseña específica por su ID
  getReseña(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/posts/${id}`);
  }

  // Método para crear una nueva reseña
  createReseña(reseña: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/posts`, reseña);
  }

  // Método para actualizar una reseña existente por su ID
  updateReseña(id: number, reseña: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/posts/${id}`, reseña);
  }

  // Método para eliminar una reseña por su ID
  deleteReseña(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/posts/${id}`);
  }
}
