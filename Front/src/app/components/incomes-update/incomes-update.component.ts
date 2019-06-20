import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MultimedioApiService } from 'src/app/services/multimedio-api.service';



@Component({
  selector: 'app-incomes-update',
  templateUrl: './incomes-update.component.html',
  styleUrls: ['./incomes-update.component.sass']
})
export class IncomesUpdateComponent implements OnInit {


  incomesList:any = []

  constructor(public service:MultimedioApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.getIncome(this.route.snapshot.params['id']);
  }


  getIncome(id){
    this.incomesList = [];
    this.service.getIncome(id).subscribe((data) => {
      console.log(data.results);
      this.incomesList = data.results;
    });
  }

}
