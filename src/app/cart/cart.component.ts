import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  title = 'Cart Items';
  items: string[];
  Salaryslip: any;


  constructor(service: CartService) {
    this.items = service.getItems();
    this.Salaryslip = service.getSalarySlip();
   
    console.log(this.Salaryslip);
    console.log(this.items);
   }

   handleClick() {
     window.location.href = 'https://www.amazon.com/';
   }
   
  ngOnInit(): void {
  }

}
