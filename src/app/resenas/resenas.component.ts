import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewRegisterService } from './resenas.service';
import { ReviewRegister } from './resenas-model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


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
    MatButtonModule,
    MatError,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.scss'],
})
export class ResenasComponent {
  showLoading = false;
  disable = false;
  message: any;
  product: any = 'PE';
  countrys = [{ name: 'Perú', abbreviation: 'PE' }];
  cssUrl: string = '';

  reviewbookForm: FormGroup;

  constructor(
    private router: Router,
    private reviewRegisterService: ReviewRegisterService,
    private fb: FormBuilder
  ) {
    this.reviewbookForm = this.createReviewBookForm();
  }

  ngOnInit() {
    if (this.product == 'PE') {
      console.log('Pago Efectivo');
    } else {
      console.log('Syndeo');
      this.changeStyle();
    }
  }

  createReviewBookForm(): FormGroup {
    return this.fb.group({
      tipo_resena: [null, [Validators.required]],
      fecha_resena: [null, [Validators.required]],
      nombres: [null, [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      apellidos: [null, [Validators.required]],
      correo: [null, [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.minLength(7)]],
      pais: [null, [Validators.required]],
      ciudad: [null, [Validators.required]],
      direccion: [null, [Validators.required]],
      tipo_identificacion: [null, [Validators.required]],
      numero_identificacion: [null, [Validators.required]],
      detalle_resena: [null, [Validators.required]],
    });
  }

  returnMain(): void {
    this.router.navigate(['/Resenas/review/main']);
  }

  public saveReview() {
    if (this.reviewbookForm.valid) {
      const reviewData = new ReviewRegister(this.reviewbookForm.getRawValue());
      this.reviewRegisterService.addReviewbook(reviewData);
    } else {
      console.log('Formulario no válido');
    }
  }

  changeStyle() {
    this.cssUrl =
      this.cssUrl === `/assets/styles/stylesSY.scss`
        ? `/assets/styles/stylesPE.scss`
        : `/assets/styles/stylesSY.scss`;
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
}
