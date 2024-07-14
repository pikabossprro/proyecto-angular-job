import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewRegisterService } from './resenas.service';
import { ReviewRegister } from './resenas-model';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


=======
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
>>>>>>> aeb9477ce03fd4c3a98ac35c50cf0e12b5e64837


@Component({
  selector: 'app-resenas',
<<<<<<< HEAD
=======
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
>>>>>>> aeb9477ce03fd4c3a98ac35c50cf0e12b5e64837
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.scss',],
})
export class ResenasComponent implements OnInit {
  showLoading = false;
  disable = false;
  message: any;
  product: any = 'PE';
  countrys = [{ name: 'Perú', abbreviation: 'PE' }];
  cssUrl: string = '';

  reviewbookForm: FormGroup;
  reviews: ReviewRegister[] = [];
  editReview: Partial<ReviewRegister> = {};

  constructor(
    private router: Router,
    private reviewRegisterService: ReviewRegisterService,
    private fb: FormBuilder
  ) {
    this.reviewbookForm = this.createReviewBookForm();
  }

  ngOnInit() {
    this.getAllReviews();
    if (this.product == 'PE') {
      console.log('Pago Efectivo');
    } else {
      console.log('Syndeo');
      this.changeStyle();
    }
  }

  createReviewBookForm(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      name: [null, [Validators.required]],
      role: [null, [Validators.required]],
      avatar: [null, [Validators.required]],
    });
  }

  getAllReviews(): void {
    this.reviewRegisterService.getAllReviews().subscribe((data: ReviewRegister[]) => {
      this.reviews = data;
    });
  }

  addReview(): void {
    if (this.reviewbookForm.valid) {
      const reviewData = new ReviewRegister(this.reviewbookForm.getRawValue());
      this.reviewRegisterService.addReviewbook(reviewData);
    } else {
      console.log('Formulario no válido');
    }
  }

  updateReview(id: number): void {
    if (this.reviewbookForm.valid) {
      const reviewData = new ReviewRegister(this.reviewbookForm.getRawValue());
      this.reviewRegisterService.updateReview(id, reviewData);
    } else {
      console.log('Formulario no válido');
    }
  }

  partialUpdateReview(id: number): void {
    if (this.reviewbookForm.valid) {
      const partialReviewData = this.reviewbookForm.getRawValue();
      this.reviewRegisterService.partialUpdateReview(id, partialReviewData);
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

  returnMain(): void {
    this.router.navigate(['/Resenas/review/main']);
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
