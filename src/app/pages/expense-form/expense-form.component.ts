import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseService } from '../../core/services/expense.service';
import { IExpense } from '../../core/models/common.model';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss'
})
export class ExpenseFormComponent {
  [x: string]: any;
  expenses: IExpense[]= [];
  expenseForm !: FormGroup;
  expenseId = '';

  constructor(
    private fb: FormBuilder,
     private expenseServices: ExpenseService, 
     private router: Router,
     private activatedRoute: ActivatedRoute,
     ) {
    this.expenseForm = this.fb.group({
      price: new FormControl("",[Validators.required]),
      title: new FormControl("",[Validators.required]),
      description: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(params) => {
        this.expenseId = params['id'];
        this.getExpense(this.expenseId);
      },
    });
  }

  

  OnSubmit(){
    if(this.expenseForm.valid){
      if(this.expenseId != ''){
        this.expenseServices.updateExpense(
          this.expenseId,
          this.expenseForm.value
        );
      }
      else{
      this.expenseServices.addExpense(this.expenseForm.value);
      }
      this.router.navigate(['/']);
    }
    else{
      this.expenseForm.markAllAsTouched();
    }
  }

  getExpense(key: string){
    this.expenseServices.getExpense(key).snapshotChanges().subscribe({
      next:(data)=>{
        let expense=data.payload.toJSON() as IExpense;
        this.expenseForm.setValue(expense);
      },
    });
  }

}
