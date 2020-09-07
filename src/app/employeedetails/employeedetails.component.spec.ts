import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { EmployeedetailsComponent } from './employeedetails.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Employee } from '../employee'
import { HttpClient } from '@angular/common/http';

describe('EmployeedetailsComponent', () => {
  let component: EmployeedetailsComponent;
  let fixture: ComponentFixture<EmployeedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedetailsComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it("should call getUser", () => {

  let userData = [{Name: "Paul", Address: "New york", Age: 20, Phone: 123466}];

   const fixture = TestBed.createComponent(EmployeedetailsComponent);
   const app = fixture.componentInstance;
   expect(app.getUser(userData)).toEqual(userData);
 });

 
});
