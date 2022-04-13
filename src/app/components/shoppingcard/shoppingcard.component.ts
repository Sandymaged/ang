import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcard',
  templateUrl: './shoppingcard.component.html',
  styleUrls: ['./shoppingcard.component.css']
})
export class ShoppingcardComponent implements OnInit {
todayDate:Date=new Date();
d1:string="";
vv:string='';
d:string='';
ClientName:string='good';

  constructor() { }

  ngOnInit(): void {
  }

}
