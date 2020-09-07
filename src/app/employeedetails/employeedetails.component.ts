import {
  Component,
  OnInit
} from '@angular/core';
import {
  Employee
} from '../employee'
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  Employees: Employee[];
  searchValue: string;


  constructor(private httpClient: HttpClient) {}

  getUser(userData) {
    console.log(userData);
    return userData;
  }
  

  search() {
    if (this.searchValue != "") {
      this.Employees = this.Employees.filter(res => {
        return res.Name.toLocaleLowerCase().indexOf(this.searchValue.toLocaleLowerCase()) !== -1
      });
    } else {
      this.ngOnInit();
    }
  }

 


  ngOnInit(): void {
    this.httpClient.get('assets/Employee.json').subscribe((result: Employee[]) => {
      this.Employees = result;
      console.log("data", this.Employees);
      return this.Employees;
    });
  } 
};