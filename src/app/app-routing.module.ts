import { EmployeesComponent } from './resturant/employees/employees.component';
import { FoodMenuComponent } from './food/food-menu/food-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'food', component: FoodMenuComponent },
  { path: 'resturant', component: EmployeesComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
