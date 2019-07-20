import { OptComponent } from './opt/opt.component';
import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'resturant', component: EmployeesComponent },
  {
    path: 'resturant/update/:id',
    component: OptComponent
  },
  {
    path: 'resturant/create',
    component: OptComponent
  },
  {
    path: 'resturant/delete/:id',
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResturantRoutingModule { }
