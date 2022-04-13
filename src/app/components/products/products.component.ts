import { ProductsAPIService } from './../../services/products-api.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/modules/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnChanges {
  prolist:IProduct[]=[];
 @Input() recived:number=0;
 totalprice:number=0;
 @Output() totalpricechange: EventEmitter<number>;
constructor(private prdservice:ProductService ,private router:Router, private prdapiservice:ProductsAPIService) {
     this.totalpricechange=new EventEmitter<number>();
  }
ngOnChanges(): void {
    //this.prolist=this.prdservice.getallproductbycatid(this.recived);
    this.prdapiservice.getallproductbycatid(this.recived).subscribe(productlist=>this.prolist=productlist);
}
ngOnInit(): void {
   // this.prolist=this.prdservice.getallproductbycatid(this.recived);
   //lw msh insted component fa 7tato floninit
   this.prdapiservice.getallproducts().subscribe(productlist=>this.prolist=productlist);
  }
updatetotalprice(price:number,itemcount:any){
    this.totalprice+=(price* +itemcount);
    this.totalpricechange.emit(this.totalprice);
      }
details(pid:number){
       this.router.navigate(['Product',pid]);
      }
}
