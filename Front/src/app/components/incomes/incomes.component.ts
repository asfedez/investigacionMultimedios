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
    return date.getFullYear()+"-0"+(date.getMonth()+1)+"-"+date.getDate();
  }
 

  getIncomes() {
    this.incomesList = [];
    this.service.getIncomes().subscribe((data) => {
      console.log(data.results);
      this.incomesList = data.results;
    });
  }

 

}
