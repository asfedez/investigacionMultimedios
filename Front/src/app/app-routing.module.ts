import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesComponent } from './components/expenses/expenses.component'
import { IncomesComponent } from './components/incomes/incomes.component'
import { SavingsComponent } from './components/savings/savings.component'
import { TotalComponent } from './components/total/total.component'

const routes: Routes = [
  {
    path:'incomes', 
    component: IncomesComponent
  },
  {
    path: '',
    redirectTo: '/incomes',
    pathMatch: 'full'
  },
  {
    path: 'savings', 
    component: SavingsComponent
  },
  {
    path: 'expenses', 
    component: ExpensesComponent
  },
  {
    path: 'total', 
    component: TotalComponent
  },
  {
    path: 'addIncome', 
    component: ExpensesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
