import { StoreInfo } from './../../modules/store-info';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/modules/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ClientName:string='good';
store1=new Store("iti",["assuit","sohag"],"https://fakeimg.pl/100/");
  constructor() {

  }
  divv:boolean=true;
  ngOnInit(): void {
  }
  togglediv(){
    this.divv=!this.divv;
  }



}
