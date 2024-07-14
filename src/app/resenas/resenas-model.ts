export class ReviewRegister{
    tipo_resena: number;
    fecha_resena: string;
    nombres: string;
    apellidos: string;
    correo: string;
    telefono: string;
    pais: string;
    ciudad: string;
    direccion: string;
    tipo_identificacion: string;
    numero_identificacion: number;
    detalle_resena: string;

    constructor(reviewRegister: ReviewRegister){
      this.tipo_resena = reviewRegister.tipo_resena || 1;
      this.fecha_resena = reviewRegister.fecha_resena || '2024-06-21';
      this.nombres = reviewRegister.nombres || 'Job Daniel';
      this.apellidos = reviewRegister.apellidos || 'Pacheco Carrasco';
      this.correo = reviewRegister.correo || 'daniel_0899@hotmail.com';
      this.telefono = reviewRegister.telefono || '9999999';
      this.pais = reviewRegister.pais || 'Perú';
      this.ciudad = reviewRegister.ciudad || 'Lima';
      this.direccion = reviewRegister.direccion || 'Lima';
      this.tipo_identificacion = reviewRegister.tipo_identificacion || 'DNI';
      this.numero_identificacion = reviewRegister.numero_identificacion || 8888888;
      this. detalle_resena = reviewRegister. detalle_resena || 'excelente servicio de venta online ahora no tengo que ir a la tienda fisica y hacer mis compras desde casa <3';
    }

}
