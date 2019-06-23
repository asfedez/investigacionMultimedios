import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesComponent } from './components/expenses/expenses.component'
import { IncomesComponent } from './components/incomes/incomes.component'
import { SavingsComponent } from './components/savings/savings.component'
import { TotalComponent } from './components/total/total.component'

import { IncomesAddComponent } from './components/incomes-add/incomes-add.component'
import { IncomesUpdateComponent } from './components/incomes-update/incomes-update.component'
import{ExpensesAddComponent} from './components/expenses-add/expenses-add.component'
import{ExpensesUpdateComponent} from './components/expenses-update/expenses-update.component'
import { SavingsAddComponent } from './components/savings-add/savings-add.component';
import { SavingsUpdateComponent } from './components/savings-update/savings-update.component';

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
  },
  {
    path:'incomes/add',
    component: IncomesAddComponent
  },
  {
    path: 'incomes/update/:id',
    component: IncomesUpdateComponent
  },
  {
    path:'expenses/add',
    component: ExpensesAddComponent
  },
  {
    path: 'expenses/update/:id',
    component: ExpensesUpdateComponent

  },
  {
    path:'savings/add',
    component: SavingsAddComponent
  },
  {
    path: 'savings/update/:id',
    component: SavingsUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
