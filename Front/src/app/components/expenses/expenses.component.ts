import { Component, OnInit } from '@angular/core';

import { ExpensesServiceService } from 'src/app/services/expenses-service.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.sass']
})
export class ExpensesComponent implements OnInit {

  expenseList:any = []

  constructor(public service:ExpensesServiceService) { }

  ngOnInit() {
    this.getExpenses();   
  }

  
  

  getDate(date){
    return date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
  }
 

  getExpenses() {
    this.expenseList = [];
    this.service.getExpenses().subscribe((data) => {
      console.log(data.results);
      this.expenseList = data.results;

      for (let index = 0; index < this.expenseList.length; index++) {

        console.log(this.expenseList[index].date);
        
        this.expenseList[index].date = this.getDate(new Date(this.expenseList[index].date))
        
      }
    });
    
    
  }

  deleteExpense(id){
    this.service.deleteExpense(id).subscribe((data)  => {
        this.getExpenses()
        }, (err) => {
          console.log(err);
        });
  }

}
