import { Component, OnInit } from '@angular/core';

import {ExpensesServiceService} from 'src/app/services/expenses-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-expenses-add',
  templateUrl: './expenses-add.component.html',
  styleUrls: ['./expenses-add.component.sass']
})
export class ExpensesAddComponent implements OnInit {

  expense:any = {
    description: "",
    date: "",
    amoung: 0
  }

  constructor(public service:ExpensesServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }


  addExpense(){
    console.log(this.expense);
    this.service.addExpense(this.expense).subscribe((result) => {
      this.router.navigate(['/expenses']);
    }, (err) => {
      console.log(err);
    });
  }

}
