import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {ExpensesServiceService} from 'src/app/services/expenses-service.service';


@Component({
  selector: 'app-expenses-update',
  templateUrl: './expenses-update.component.html',
  styleUrls: ['./expenses-update.component.sass']
})
export class ExpensesUpdateComponent implements OnInit {

  expense:any ={
    description: "",
    date: "",
    amoung: 0
  }
  date:any = new Date() 
  id:any = 0


  constructor(public service:ExpensesServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.getExpense(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
  }

  getDate(date){
    return date.getFullYear()+"-0"+(date.getMonth()+1)+"-"+date.getDate();
  }

  getExpense(id){
    this.expense = {};
    this.service.getExpense(id).subscribe((data) => {
      this.expense = data.results[0];
      this.expense.date = this.getDate(new Date(data.results[0].date))
    });
  }

  updateExpense(){
    this.expense.amoung = parseInt(this.expense.amoung)
    console.log(this.id);

    this.service.updateExpense(this.expense, this.id).subscribe((result) => {
      this.router.navigate(['/expenses']);
    }, (err) => {
      console.log(err);
    });;
    
  }


}
