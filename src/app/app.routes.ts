import { Routes } from '@angular/router';
import { ExpenseComponent } from './pages/expense/expense.component';
import { ExpenseFormComponent } from './pages/expense-form/expense-form.component';
import { InsidePageComponent } from './pages/inside-page/inside-page.component';

export const routes: Routes = [
    {path:'',component: ExpenseComponent},
    {path:'expense-form', component: ExpenseFormComponent},
    {path:'expense-form/:id', component:ExpenseFormComponent},
    {path: 'inside-page', component:InsidePageComponent}
];
