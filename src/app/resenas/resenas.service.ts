import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReviewRegister } from './resenas-model';
import Swal from "sweetalert2"
import { UnsubscribeOnDestroyAdapter } from '../shared/sub/UnsubscribeOnDestroyAdapter';
import { environment } from '../environments/environments.developments';
import {  catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResenaRegisterService extends UnsubscribeOnDestroyAdapter {

 private readonly API_URL = `${environment.apiURL}/products`

 constructor(private httpClient: HttpClient) {
  super()
 }
 
  addresena(resena: ReviewRegister): void{
    this.httpClient.post<any>(this.API_URL, resena)
    .subscribe({
      next: (data)=>{
        Swal.fire({
          icon: "success",
          title: "Reseña Generada",
          text: `Se genero La Reseña con id# ${data.id}`,
        }).then(function(){
          window.location.reload();
        })
      },
      error: (err: HttpErrorResponse) =>{
          console.log(err.name + ' ' + err.message);
          if(err.status=== 403){
            Swal.fire({
              icon: "error",
              title: "Error de solicitud",
              text: `Hubo un problema con la solicitud. Por favor, verifica los datos`,
            })
          }
      },
    })
  }
  getResena(id: number): Observable<ReviewRegister> {
    return this.httpClient.get<ReviewRegister>(`${this.API_URL}/${id}`);
  }
  
  updateResena(id: number, resena: ReviewRegister): Observable<ReviewRegister> {
    return this.httpClient.put<ReviewRegister>(`${this.API_URL}/${id}`, resena)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err.name + ' ' + err.message);
          if (err.status === 403) {
            Swal.fire({
              icon: "error",
              title: "Error de solicitud",
              text: `Hubo un problema con la solicitud. Por favor, verifica los datos`,
            });
          }
          throw err;
        })
      );
  }
  
}

