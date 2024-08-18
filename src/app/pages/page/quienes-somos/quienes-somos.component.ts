import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.scss'
})
export class QuienesSomosComponent {
  constructor(private router: Router) {}


  ReturnIndex(): void {
    this.router.navigate(['pages/index']);
  }

  Gotoproducts(): void {
    this.router.navigate(['pages/productos']);
  }

  Gotoabout(): void {
    this.router.navigate(['pages/quienes-somos']);
  }

  Gotoreview(): void {
    this.router.navigate(['pages/resenas']);
  }

  Gotopedido(): void {
    this.router.navigate(['pages/pedidos']);
  }
}
