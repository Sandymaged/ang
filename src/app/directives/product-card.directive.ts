import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.border="3px solid light";
    element.nativeElement.style.boxShadow = '0 3px 3px';

   }
   @HostListener('mouseenter') OnMouseEnter(){
     this.element.nativeElement.style.border="5px solid black";
   }
   @HostListener('mouseout') OnMouseOut(){
    this.element.nativeElement.style.border="3px solid ";
  }

}
