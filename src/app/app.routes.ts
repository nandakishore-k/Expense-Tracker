import { Routes } from '@angular/router';
import { ExpenseComponent } from './pages/expense/expense.component';
import { ExpenseFormComponent } from './pages/expense-form/expense-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path:'',component: LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'expense',component: ExpenseComponent},
    {path:'expense-form', component: ExpenseFormComponent},
    {path:'expense-form/:id', component:ExpenseFormComponent}
];
