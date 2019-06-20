import { Component, OnInit } from '@angular/core';

import { MultimedioApiService } from 'src/app/services/multimedio-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incomes-add',
  templateUrl: './incomes-add.component.html',
  styleUrls: ['./incomes-add.component.sass']
})
export class IncomesAddComponent implements OnInit {


  income:any = {
    description: "",
    date: "",
    amoung: 0
  }

  constructor(public service:MultimedioApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }


  addIncome(){
    console.log(this.income);
    this.service.addIncome(this.income).subscribe((result) => {
      this.router.navigate(['/incomes']);
    }, (err) => {
      console.log(err);
    });
  }


}
