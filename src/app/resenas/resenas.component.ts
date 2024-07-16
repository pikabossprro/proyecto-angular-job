import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.scss']
})
export class ResenasComponent {
  showAlert: boolean = false;

  constructor(private router: Router) {}

  submitReview(): void {
    // Lógica para enviar la reseña aquí

    // Mostrar alerta utilizando SweetAlert2
    Swal.fire({
      icon: 'success',
      title: '¡Reseña enviada!',
      showConfirmButton: false,
      timer: 30000 // Duración en milisegundos (3 segundos)
    });

    // Mostrar la alerta en el componente
    this.showAlert = true;

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      this.showAlert = false;
    }, 30000);
  }

  returnIndex(): void {
    this.router.navigate(['']);
  }

  gotoProducts(): void {
    this.router.navigate(['/productos']);
  }

  gotoAbout(): void {
    this.router.navigate(['/quienes-somos']);
  }

  gotoReviews(): void {
    this.router.navigate(['/resenas']);
  }
}
