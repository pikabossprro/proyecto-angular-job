import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments.developments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReviewRegister } from './review-register.model';
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
