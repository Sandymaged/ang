import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './directives/product-card.directive';
import { ShoppingcardComponent } from './components/shoppingcard/shoppingcard.component';
import { TransformPipe } from './pipe/transform.pipe';
import { TrandatePipe } from './pipe/trandate.pipe';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainComponent } from './components/main/main.component';
import { ProdetailsComponent } from './components/prodetails/prodetails.component';
import{HttpClientModule}from '@angular/common/http';
import { AddProductComponent } from './components/Admin/add-product/add-product.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductCardDirective,
    ShoppingcardComponent,
    TransformPipe,
    TrandatePipe,
    ProductsComponent,
    OrdersComponent,
    NotfoundComponent,
    MainComponent,
    ProdetailsComponent,
    AddProductComponent,
    UserRegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
HttpClientModule,
ReactiveFormsModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
