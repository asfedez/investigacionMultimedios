import { Component, OnInit } from '@angular/core';
import {SavingsService} from 'src/app/services/savings.service';
@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.sass']
})
export class SavingsComponent implements OnInit {

  savingsList:any = []

  constructor(public service:SavingsService ) { }

  ngOnInit() {
    this.getSavings();   
  }

  
  

  getDate(date){
    return date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
  }
 

  getSavings() {
    this.savingsList = [];
    this.service.getSavings().subscribe((data) => {
      console.log(data.results);
      this.savingsList = data.results;

      for (let index = 0; index < this.savingsList.length; index++) {

        console.log(this.savingsList[index].date);
        
        this.savingsList[index].date = this.getDate(new Date(this.savingsList[index].date))
        
      }
    });
    
    
  }

  deleteSaving(id){
    this.service.deleteSaving(id).subscribe((data)  => {
        this.getSavings()
        }, (err) => {
          console.log(err);
        });
  }

 

}
