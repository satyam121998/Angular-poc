import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {


  constructor() { }

  ItemList =["Smartphone", "SmartTv", "Smart Refridgerator" ,"Other Smart Appliances"]; 

  getItems () {
    
    return (this.ItemList);
  }

  checkAuthentication() {
    localStorage.setItem("user", "satyam");
    return (localStorage.getItem("user") === "satyam");
  }

  getSalarySlip(){
    if(this.checkAuthentication()){
      return "Salary Slip";
    }
    return "Not Authenticated";
  }

}
