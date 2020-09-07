import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloworldComponent} from './helloworld/helloworld.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { EmployeedetailsComponent} from './employeedetails/employeedetails.component'
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'card', component: CardComponent},
  {path: 'hello', component: HelloworldComponent},
  {path: 'cart', component: CartComponent},
  {path: 'view', component: ViewComponent},
  {path: 'table', component:TableComponent},
  {path: 'emp-table', component:EmployeedetailsComponent},
  {path: '', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }