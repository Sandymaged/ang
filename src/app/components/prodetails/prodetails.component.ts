import { ProductsAPIService } from './../../services/products-api.service';
import { IProduct } from './../../modules/iproduct';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
prd:IProduct |undefined=undefined;
prdarrayid:number[]=[];
prdarray:Observable<Number[]> | undefined;
 currentid:number=0;
private currindex:number=0;
private subscription !: Subscription[];
prolist:IProduct[]=[];
  constructor(private actroute:ActivatedRoute,private prdser:ProductService ,private prdapiser:ProductsAPIService,private loc:Location
    ,private router:Router
    ) { }

  ngOnInit(): void {
    this.prdarrayid=this.prdser.getarrayofpro();//shela kol id alproducts
  //kol ma parameter byt8er by8er alid 3shn paramap observable blr8m mn ngoninit bttnfz mra w7da
    this.actroute.paramMap.subscribe(paramMap=>{
    this.currentid=(paramMap.get('pid'))? Number(this.actroute.snapshot.paramMap.get('pid')):0;
    let foundprd=this.prdser.getproductbyid(this.currentid);
    if(foundprd){
    this.prd=foundprd;}
    else{
 alert("Invlid product");
      this.loc.back();
        }
  });
  //this.prdarray=this.prdapiser.getallproductsid();
//console.log(this.prdarray[0]);
 } //kol ma para tt8er f update currentproid

goback(){
  this.loc.back();
}
pervious(){
  this.currindex=this.prdarrayid.findIndex(i=>i==this.currentid);
  this.router.navigate(['/Product',this.prdarrayid[--this.currindex]]);
}
next(){
  this.currindex=this.prdarrayid.findIndex(i=>i==this.currentid);
  this.router.navigate(['/Product',this.prdarrayid[++this.currindex]]);
}

search(prdname:string){
  let foundprd=this.prdser.searchbyname(prdname);
  if(foundprd){
  this.prd=foundprd;
}
else{
  alert("Invlid product");
  this.loc.back();
    }
}
}


//gwa al oninit
 /*let subs=this.actroute.paramMap.subscribe({
    next:(paramMap)=>{
      this.currentid=(paramMap.get('pid'))? Number(this.actroute.snapshot.paramMap.get('pid')):0;
    },
    error:(err)=>{
      console.log(err);
    },
    complete:()=>{

    }

  });
  this.subscription.push(subs);*/
/*
ngOnDestroy(): void {
  //this.subscription.unsubscribe();//ay observible sh8al 3shn msbsh 7aga sh8ala msh 3ezha
 // for (let s of this.subscription){
   //    s.unsubscribe();
  //}
 */





