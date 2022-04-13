import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddProductComponent } from './components/Admin/add-product/add-product.component';
import { ProdetailsComponent } from './components/prodetails/prodetails.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'', component: MainComponent, children:[
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Product', component:ProductsComponent},
  {path:'Product/:pid', component:ProdetailsComponent},
  {path:'Order', component:OrdersComponent},
  {path:'NewProduct', component:AddProductComponent},
  {path:'NewUser', component:UserRegisterComponent},
]},
{path:'register',component:UserRegisterComponent},
  {path:'**', component:NotfoundComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
