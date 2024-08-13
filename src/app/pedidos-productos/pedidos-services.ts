import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PedidoRegister } from './pedidos-model';
import Swal from "sweetalert2"
import { UnsubscribeOnDestroyAdapter } from '../shared/sub/UnsubscribeOnDestroyAdapter';
import { environment } from '../environments/environments.developments';
import {  catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidoRegisterService extends UnsubscribeOnDestroyAdapter {

 private readonly API_URL = `${environment.apiURL}/products`

 constructor(private httpClient: HttpClient) {
  super()
 }
 
  addpedido(pedido: PedidoRegister): void{
    this.httpClient.post<any>(this.API_URL, pedido)
    .subscribe({
      next: (data)=>{
        Swal.fire({
          icon: "success",
          title: "Pedido Generado",
          text: `Se genero El Pedido con id# ${data.id}`,
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
  getPedido(id: number): Observable<PedidoRegister> {
    return this.httpClient.get<PedidoRegister>(`${this.API_URL}/${id}`);
}

  
 
  
}
