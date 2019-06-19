import { Component, OnInit } from '@angular/core';
import { MultimedioApiService } from 'src/app/services/multimedio-api.service';

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

  getIncomes() {
    this.incomesList = [];
    this.service.getIncomes().subscribe((data: {}) => {
      console.log(data);
      this.incomesList = data;
    });
  }

}
