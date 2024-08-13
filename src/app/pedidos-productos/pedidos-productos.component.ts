import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PedidoRegister } from './pedidos-model';
import { PedidoRegisterService } from './pedidos-services';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos-productos',
  standalone: true,
  imports: [ FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatError,
    CommonModule,],
  templateUrl: './pedidos-productos.component.html',
  styleUrl: './pedidos-productos.component.scss'
})
export class PedidosProductosComponent {
  showLoading = false;
  disable = false;
  message: any;
  checked = false;
  hasUnitNumber = false;
  

  pedido: any;
  pedidoForm: UntypedFormGroup;

  pedidoId!: string; 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public PedidoRegisterService: PedidoRegisterService,
    private fb: UntypedFormBuilder
  ) {
    const blank = {} as PedidoRegister;
    this.pedido = new PedidoRegister(blank);
    this.pedidoForm = this.createPedidoForm();
  }

  ngOnInit():void{
    this.pedidoId = this.route.snapshot.paramMap.get('idProduct') ?? '';
    this.getPedido();
  }

  createPedidoForm(): UntypedFormGroup {
    return this.fb.group({
      title: [this.pedido.title, [Validators.required]],
      price: [this.pedido.price, [Validators.required]],
      description: [this.pedido.description, [Validators.required]],
      categoryId: [this.pedido.categoryId, [Validators.required]],
      images: [this.pedido.images, [Validators.required]],
    });
  }

  async savePedido() {
    try {
      await this.PedidoRegisterService.addpedido(this.pedidoForm.getRawValue());
      Swal.fire('Éxito', 'Pedido guardado correctamente', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Ocurrió un inconveniente. Intente más tarde.', 'error');
    }
  }

  getPedido(): void {
    const pedidoIdNumber = Number(this.pedidoId);
    this.PedidoRegisterService.getPedido(pedidoIdNumber).subscribe(
      (pedido: any) => {
        this.pedido = pedido;
        this.pedidoForm.patchValue({
          title: this.pedido.title,
          price: this.pedido.price,
          description: this.pedido.description,
          categoryId: this.pedido.category.id,
          images: ["https://placeimg.com/640/480/any"]
        });
      },
      (error) => {
        console.error(error);
        alert('Ocurrió un inconveniente. Por favor, intente registrar más tarde');
      }
    ); 
}



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
