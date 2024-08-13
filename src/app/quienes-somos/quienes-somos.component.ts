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
    this.router.navigate(['']);
  }
  Gotoproducts(): void {
    this.router.navigate(['/productos']);
  }
  Gotoabout(): void {
    this.router.navigate(['/quienes-somos']);
  }
  Gotoreview(): void {
    this.router.navigate(['/resenas']);
  }
  Gotopedido(): void {
    this.router.navigate(['/pedidos']);
  }
}
