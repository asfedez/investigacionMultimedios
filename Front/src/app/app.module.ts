import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { SavingsComponent } from './components/savings/savings.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalComponent } from './components/total/total.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IncomesComponent,
    ExpensesComponent,
    SavingsComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
