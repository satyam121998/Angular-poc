import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { ButtonModule } from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { ViewComponent } from './view/view.component';
import { TableComponent } from './table/table.component';
import {TableModule, TableService} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { SearchfilterPipe } from './searchfilter.pipe';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password';
import { RegisterComponent } from './register/register.component';








@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    CardComponent,
    CartComponent,
    ViewComponent,
    TableComponent,
    SearchfilterPipe,
    EmployeedetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputNumberModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [
    CartService,
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
