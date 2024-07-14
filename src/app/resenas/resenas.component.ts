import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewRegisterService } from './resena-service';
import { ReviewRegister } from './resenas-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-resenas',
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
