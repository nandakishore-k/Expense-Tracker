import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService=inject(AuthService)
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username :['',Validators.required],
    email :['', Validators.required],
    password:['',Validators.required],
    f_name:['',Validators.required],
    l_name:['',Validators.required],
  });

  onSubmit(): void{
   const rawForm = this.form.getRawValue()
   this.authService.register(rawForm.email,rawForm.username,rawForm.password,rawForm.f_name,rawForm.l_name).subscribe(() => {})
   this.router.navigateByUrl('/expense');
}
}
