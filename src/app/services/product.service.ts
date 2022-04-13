import { IProduct } from './../modules/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private ProductList:IProduct[];
  constructor() {
    this.ProductList=[
      {id:1,name:"item1",quantity:0,price:111,img:"https://fakeimg.pl/100/",cateogryid:1},
      {id:2,name:"item1",quantity:1,price:111,img:"https://fakeimg.pl/100/",cateogryid:1},
      {id:3,name:"item2",quantity:90,price:111,img:"https://fakeimg.pl/100/",cateogryid:2},
      {id:4,name:"item3",quantity:20,price:111,img:"https://fakeimg.pl/100/",cateogryid:3},
      {id:5,name:"item4",quantity:20,price:111,img:"https://fakeimg.pl/100/",cateogryid:3},

    ]
  }
  getallproducts():IProduct[]{
    return this.ProductList;
  }
  getallproductbycatid(catid:number):IProduct[]{
   if(catid==0){
    return this.getallproducts();}
    else{
      return this.ProductList.filter((pro)=>pro.cateogryid==catid);
    }
  }
  getproductbyid(proid:number):IProduct|undefined
  {
    return this.ProductList.find((pro)=>pro.id==proid);
  }
  searchbyname(proname:string):IProduct |undefined{
    return this.ProductList.find((pro)=>pro.name==proname);
  }
  getarrayofpro():number[]{
     return this.ProductList.map(pro=>pro.id);
  }
  addproduct(product:IProduct):void{
   this.ProductList.push(product);
  }
}
