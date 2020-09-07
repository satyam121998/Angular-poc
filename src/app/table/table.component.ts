import { Component, OnInit } from '@angular/core';
import {TableService} from '../table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../employeedetails/employeedetails.component.css']
})
export class TableComponent  {
    
  datas: any[];
  searchValue: string;

  constructor(tableService: TableService) { 
    this.datas = tableService.getdata();
    console.log("Data Array", this.datas);
    console.log("length", this.datas.length);
  }

  getUser(userData) {
    console.log(userData);
  }

  ngOnInit(): void {
    
  }

}
