<<<<<<< HEAD:src/app/resenas/resena-service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewRegister } from './resenas-model';
import { environment } from '../environments/environments.developments';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ReviewRegisterService {
  private readonly API_URL = `${environment.apiURL}/users`;

  constructor(private httpClient: HttpClient) {}

  addReviewbook(review: ReviewRegister): void {
    this.httpClient.post<any>(this.API_URL, review).subscribe({
      next: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
          text: `Se registró el usuario con ID ${data.id}`,
        }).then(() => {
          window.location.reload();
        });
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.name + ' ' + err.message);
        if (err.status === 403) {
          Swal.fire({
            icon: 'error',
            title: 'Error de solicitud',
            text: 'Hubo un problema con la solicitud. Por favor, verifica los datos',
          });
        }
      },
    });
  }

  getAllReviews(): Observable<ReviewRegister[]> {
    return this.httpClient.get<ReviewRegister[]>(this.API_URL);
  }

  getReviewById(id: number): Observable<ReviewRegister> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ReviewRegister>(url);
  }

  updateReview(id: number, review: ReviewRegister): void {
    const url = `${this.API_URL}/${id}`;
    this.httpClient.put<any>(url, review).subscribe({
      next: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado',
          text: `El usuario con ID ${data.id} ha sido actualizado`,
        }).then(() => {
          window.location.reload();
        });
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.name + ' ' + err.message);
        if (err.status === 403) {
          Swal.fire({
            icon: 'error',
            title: 'Error de solicitud',
            text: 'Hubo un problema con la solicitud. Por favor, verifica los datos',
          });
        }
      },
    });
  }

  partialUpdateReview(id: number, partialReview: Partial<ReviewRegister>): void {
    const url = `${this.API_URL}/${id}`;
    this.httpClient.patch<any>(url, partialReview).subscribe({
      next: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario parcialmente actualizado',
          text: `El usuario con ID ${data.id} ha sido parcialmente actualizado`,
        }).then(() => {
          window.location.reload();
        });
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.name + ' ' + err.message);
        if (err.status === 403) {
          Swal.fire({
            icon: 'error',
            title: 'Error de solicitud',
            text: 'Hubo un problema con la solicitud. Por favor, verifica los datos',
          });
        }
      },
    });
  }
}
=======
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.developments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReviewRegister } from './resenas-model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ReviewRegisterService {
  private readonly API_URL = `${environment.apiURL}/zegel/reviewbook`;

  constructor(private httpClient: HttpClient) {}

  addReviewbook(reviewbook: ReviewRegister): void {
    this.httpClient.post<any>(this.API_URL, reviewbook)
      .subscribe({
        next: (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Reseña registrada',
            text: `Se ha registrado la reseña # ${data.idReview}`,
          }).then(() => {
            window.location.reload();
          });
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.name + ' ' + err.message);
          if (err.status === 403) {
            Swal.fire({
              icon: 'error',
              title: 'Error de solicitud',
              text: `Hubo un problema con la solicitud. Por favor, verifica los datos`,
            });
          }
        },
      });
  }
}
>>>>>>> aeb9477ce03fd4c3a98ac35c50cf0e12b5e64837:src/app/resenas/resenas.service.ts
