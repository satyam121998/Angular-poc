import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  data = [{
    name: "John",
    address: "London",
    age: "32",
    phone: "12345" 
  }, 
  {
    name: "Paul",
    address: "Paris",
    age: "27",
    phone: "67890"
  }];

  getdata() {
    return this.data;
  }
}
