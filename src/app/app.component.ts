import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
=======
import { HttpClientModule } from '@angular/common/http';

>>>>>>> aeb9477ce03fd4c3a98ac35c50cf0e12b5e64837
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,  HttpClientModule],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thx_home';
  submit(form: NgForm) { 
    console.log(form.value);   
  }
}
