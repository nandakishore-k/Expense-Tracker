import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 /* fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email :['', Validators.required],
    password:['',Validators.required],
  });


  constructor(private authService: AuthService) {}

  login() {
    const rawForm = this.form.getRawValue()
    this.authService.login(rawForm.email, rawForm.password);
  }
  onSubmit(): void{
    console.log('login');
    const rawForm = this.form.getRawValue()
    this.authService.login(rawForm.email, rawForm.password).subscribe(() => {})
    console.log('login');
  }
  errorMessage: string | null=null;
  onSubmit(): void{
    const rawForm=this.form.getRawValue()
    this.authService.login(rawForm.email,rawForm.password).subscribe({ next:()=>{
      this.router.navigateByUrl('/home');
    },
    });
  }*/
  fb=inject(FormBuilder);
  http=inject(HttpClient);
  router=inject(Router);
  authService=inject(AuthService);

  form=this.fb.nonNullable.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  errorMessage: string | null=null;
  onSubmit(): void{
    const rawForm=this.form.getRawValue()
    this.authService.login(rawForm.email,rawForm.password)
    .subscribe({ next:()=>{
      this.router.navigateByUrl('/expense');
    },
    error: (err)=>{
      this.errorMessage=err.code;
    },
    });
  }
}
