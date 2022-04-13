import { CategoryAPIService } from './../../services/category-api.service';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/modules/icategory';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  receviedtotalprice:number=0;
  cats:ICategory[]=[];
  sele:number=0;

  constructor(private capiservice:CategoryAPIService) {

  }

  ngOnInit(): void {
    this.capiservice.getallcategory().subscribe(productlist=>this.cats=productlist);

  }
ontotalpricechange(totalprice:number){
this.receviedtotalprice=totalprice;
}
}
