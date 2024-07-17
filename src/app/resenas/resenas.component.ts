import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ReviewRegister } from './resenas-model';
import { ResenaRegisterService } from './resenas.service';
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
  selector: 'app-resenas',
  standalone: true,
  imports: [
    FormsModule,
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
    CommonModule,
  ],
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.scss']
})
export class ResenasComponent {
  showLoading = false;
  disable = false;
  message: any;
  checked = false;
  hasUnitNumber = false;
  urlTree: any;
  product: any = 'PE';
  countrys = [{ name: 'Perú', abbreviation: 'PE' }];
  cssUrl: string = '';

  resena: ReviewRegister;
  resenaForm: UntypedFormGroup;
  resenaId: number = 1; // ID de la reseña por defecto

  constructor(
    private router: Router,
    public resenaRegisterService: ResenaRegisterService,
    private fb: UntypedFormBuilder
  ) {
    const blank = {} as ReviewRegister;
    this.resena = new ReviewRegister(blank);
    this.resenaForm = this.createResenaForm();
  }

  ngOnInit() {
    if (this.product == 'PE') {
      console.log('Pago Efectivo');
    } else {
      console.log('Syndeo');
      this.changeStyle();
    }
  }

  createResenaForm(): UntypedFormGroup {
    return this.fb.group({
      title: [this.resena.title, [Validators.required]],
      price: [this.resena.price, [Validators.required]],
      description: [this.resena.description, [Validators.required]],
      categoryId: [this.resena.categoryId, [Validators.required]],
      images: [this.resena.images, [Validators.required]],
    });
  }

  async saveResena() {
    try {
      await this.resenaRegisterService.addresena(this.resenaForm.getRawValue());
      Swal.fire('Éxito', 'Reseña guardada correctamente', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Ocurrió un inconveniente. Intente más tarde.', 'error');
    }
  }

  getResena(id: number): void {
    this.resenaRegisterService.getResena(id).subscribe({
      next: (data: ReviewRegister) => {
        this.resena = data;
        this.resenaForm.patchValue(data); // Cargar datos en el formulario
        console.log('Reseña obtenida:', data);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.name + ' ' + err.message);
        if (err.status === 404) {
          Swal.fire({
            icon: "error",
            title: "Reseña no encontrada",
            text: `No se pudo encontrar la reseña con ID ${id}`,
          });
        }
      },
    });
  }
  updateResena(id: number): void {
    if (!id) {
      Swal.fire({
        icon: "error",
        title: "ID inválido",
        text: "Por favor, ingresa un ID válido.",
      });
      return;
    }
  
    const updateData: ReviewRegister = {
      title: this.resenaForm.get('title')?.value || '',
      price: this.resenaForm.get('price')?.value || 0,
      description: this.resena.description,
      categoryId: this.resena.categoryId,
      images: this.resena.images.length ? this.resena.images : ["https://placeimg.com/640/480/any"]
    };
  
    console.log('Datos a enviar:', updateData);
  
    this.resenaRegisterService.updateResena(id, updateData).subscribe({
      next: () => {
        Swal.fire({
          icon: "success",
          title: "Reseña Actualizada",
          text: `Se actualizó la reseña con ID# ${id}`,
        }).then(() => {
          window.location.reload();
        });
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Error de actualización",
          text: `Hubo un problema al actualizar la reseña. Verifica los datos.`,
        });
      },
    });
  }
  
  
  
  
  
  

  changeStyle() {
    this.cssUrl =
      this.cssUrl === `/assets/styles/stylesSY.scss`
        ? `/assets/styles/stylesPE.scss`
        : `/assets/styles/stylesSY.scss`;
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
