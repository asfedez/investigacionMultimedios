import { Component, OnInit } from '@angular/core';

import { MultimedioApiService } from 'src/app/services/multimedio-api.service';


//import * as $ from "jQuery";


//declare var $:any;

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.sass']
})


export class IncomesComponent implements OnInit {

  incomesList:any = []

  constructor(public service:MultimedioApiService ) { }

  ngOnInit() {
    this.getIncomes();   
  }

  
  

  getDate(date){
    return date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
  }
 

  getIncomes() {
    this.incomesList = [];
    this.service.getIncomes().subscribe((data) => {
      console.log(data.results);
      this.incomesList = data.results;

      for (let index = 0; index < this.incomesList.length; index++) {

        console.log(this.incomesList[index].date);
        
        this.incomesList[index].date = this.getDate(new Date(this.incomesList[index].date))
        
      }
    });
    
    
  }

  deleteIncome(id){
    this.service.deleteIncome(id).subscribe((data)  => {
        this.getIncomes()
        }, (err) => {
          console.log(err);
        });
  }

 

}
