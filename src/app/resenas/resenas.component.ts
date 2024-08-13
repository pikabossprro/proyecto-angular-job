import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  

  resena: any;
  resenaForm: UntypedFormGroup;

  resenaId!: string; 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public resenaRegisterService: ResenaRegisterService,
    private fb: UntypedFormBuilder
  ) {
    const blank = {} as ReviewRegister;
    this.resena = new ReviewRegister(blank);
    this.resenaForm = this.createResenaForm();
  }

  ngOnInit():void{
    this.resenaId = this.route.snapshot.paramMap.get('idProduct') ?? '';
    this.getResena();
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

  getResena(): void {
    const resenaIdNumber = Number(this.resenaId);
    this.resenaRegisterService.getResena(resenaIdNumber).subscribe(
      (resena: any) => {
        this.resena = resena;
        this.resenaForm.patchValue({
          title: this.resena.title,
          price: this.resena.price,
          description: this.resena.description,
          categoryId: this.resena.category.id,
          images: ["https://placeimg.com/640/480/any"]
        });
      },
      (error) => {
        console.error(error);
        alert('Ocurrió un inconveniente. Por favor, intente registrar más tarde');
      }
    ); 
}

  
  updateResena(): void {
    const resenaIdNumber = Number(this.resenaId);
    this.resenaRegisterService.updateResena(resenaIdNumber, this.resenaForm.value).subscribe(
      (data: any) => {
        Swal.fire({
          icon: "success",
          title: "Reseña actualizada con éxito",
          text: `Se actualizó el producto con id # ${data.id}`,
        }).then(function(){
          window.location.reload();
        })
      },
      (error) => {
        console.error(error);
        alert('Ocurrió un inconveniente. Por favor, intente registrar más tarde');
      }
    );
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
  Gotopedido(): void {
    this.router.navigate(['/pedidos']);
  }
}
