import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MultimedioApiService } from 'src/app/services/multimedio-api.service';



@Component({
  selector: 'app-incomes-update',
  templateUrl: './incomes-update.component.html',
  styleUrls: ['./incomes-update.component.sass']
})
export class IncomesUpdateComponent implements OnInit {


  income:any ={
    description: "",
    date: "",
    amoung: 0
  }
  date:any = new Date() 
  id:any = 0

  constructor(public service:MultimedioApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.getIncome(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
  }

  getDate(date){
    return date.getFullYear()+"-0"+(date.getMonth()+1)+"-"+date.getDate();
  }

  getIncome(id){
    this.income = {};
    this.service.getIncome(id).subscribe((data) => {
      this.income = data.results[0];
      this.income.date = this.getDate(new Date(data.results[0].date))
    });
  }

  updateIncome(){
    this.income.amoung = parseInt(this.income.amoung)
    console.log(this.id);

    this.service.updateIncome(this.income, this.id).subscribe((result) => {
      this.router.navigate(['/incomes']);
    }, (err) => {
      console.log(err);
    });;
    
  }

}
