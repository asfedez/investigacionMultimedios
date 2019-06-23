import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { SavingsService} from 'src/app/services/savings.service';
@Component({
  selector: 'app-savings-update',
  templateUrl: './savings-update.component.html',
  styleUrls: ['./savings-update.component.sass']
})
export class SavingsUpdateComponent implements OnInit {

  saving:any ={
    description: "",
    date: "",
    amoung: 0
  }
  date:any = new Date() 
  id:any = 0

  constructor(public service:SavingsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.getSaving(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
  }

  getDate(date){
    return date.getFullYear()+"-0"+(date.getMonth()+1)+"-"+date.getDate();
  }

  getSaving(id){
    this.saving = {};
    this.service.getSaving(id).subscribe((data) => {
      this.saving = data.results[0];
      this.saving.date = this.getDate(new Date(data.results[0].date))
    });
  }

  updateSaving(){
    this.saving.amoung = parseInt(this.saving.amoung)
    console.log(this.id);

    this.service.updateSaving(this.saving, this.id).subscribe((result) => {
      this.router.navigate(['/savings']);
    }, (err) => {
      console.log(err);
    });;
    
  }

}
