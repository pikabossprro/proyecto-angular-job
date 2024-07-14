import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
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

  productos = [
    {
      nombre: 'REFRIGERADORA SAMSUMG 446L GB46TGT',
      descripcion: 'ThinQ: Conectividad Wi-Fi',
      precio: 2999,
      imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20228735_01/w=1500,h=1500,fit=pad'
    },
    {
      nombre: 'REFRIGERADORA SIDE BY SIDE NO FROST LG 509',
      descripcion: 'Inverter Compressor, Eficiencia energetica',
      precio: 1954,
      imagen: 'https://oechsle.vteximg.com.br/arquivos/ids/18179836-1000-1000/2320223.jpg?v=638538344846870000'
    },
    {
      nombre: 'LAVASECA LG 22KG/13KG CARGA FRONTAL',
      descripcion: 'Motor Direct Drive: 10 años de garantía',
      precio: 4559,
      imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/19625006_01/w=800,h=800,fit=pad'
    },
    {
      nombre: 'LAVASECA LG 12KG/7KG CARGA FRONTAL',
      descripcion: 'AI DD Inteligencia Artificial',
      precio: 1954,
      imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/131640795_01/w=1500,h=1500,fit=pad'
    },
    {
      nombre: 'COCINA DE PIE A GAS INDURAMA 6',
      descripcion: '6 hornillas - capacidad:126L',
      precio: 1200,
      imagen: 'https://oechsle.vteximg.com.br/arquivos/ids/8650016-1500-1500/image-3f9124e6a5db403384ef031339c55447.jpg?v=637878977556370000'
    },
    {
      nombre: 'COCINA A GAS INDURAMA VIENA 4',
      descripcion: '4 hornillas - capacidad:66L',
      precio: 899,
      imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/131966212_01/w=800,h=800,fit=pad'
    }
  ];
}
