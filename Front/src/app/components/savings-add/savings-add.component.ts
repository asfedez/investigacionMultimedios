import { Component, OnInit } from '@angular/core';

import {SavingsService} from 'src/app/services/savings.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-savings-add',
  templateUrl: './savings-add.component.html',
  styleUrls: ['./savings-add.component.sass']
})
export class SavingsAddComponent implements OnInit {

  saving:any = {
    description: "",
    date: "",
    amoung: 0
  }

  constructor(public service:SavingsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }


  addSaving(){
    console.log(this.saving);
    this.service.addSaving(this.saving).subscribe((result) => {
      this.router.navigate(['/savings']);
    }, (err) => {
      console.log(err);
    });
  }



}
