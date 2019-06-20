import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { SavingsComponent } from './components/savings/savings.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalComponent } from './components/total/total.component';
import { IncomesAddComponent } from './components/incomes-add/incomes-add.component';
import { IncomesUpdateComponent } from './components/incomes-update/incomes-update.component';
import { ExpensesAddComponent } from './components/expenses-add/expenses-add.component';
import { ExpensesUpdateComponent } from './components/expenses-update/expenses-update.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IncomesComponent,
    ExpensesComponent,
    SavingsComponent,
    TotalComponent,
    IncomesAddComponent,
    IncomesUpdateComponent,
    ExpensesAddComponent,
    ExpensesUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
