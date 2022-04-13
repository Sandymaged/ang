import { CategoryAPIService } from './../../../services/category-api.service';
import { ProductService } from './../../../services/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/modules/iproduct';
import { ProductsAPIService } from './../../../services/products-api.service';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/modules/icategory';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  cats:ICategory[]=[];
  prd:IProduct={} as IProduct;
  constructor(private prdapiser:ProductsAPIService,private router:Router,private prdser:ProductService,private capiservice:CategoryAPIService) {
    this.capiservice.getallcategory().subscribe(productlist=>this.cats=productlist);
  }

  ngOnInit(): void {
  }

Insertpro(){

  this.prdapiser.addproduct(this.prd).subscribe({
    next:(prd)=>{
      this.router.navigate(['/Product']);
    },
    error:(err)=>{
      alert("error");
    }
  });
}
}
