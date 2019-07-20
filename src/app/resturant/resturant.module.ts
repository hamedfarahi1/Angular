import { MenuModule } from './../menu/menu.module';
import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResturantRoutingModule } from './resturant-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { OptComponent } from './opt/opt.component';

@NgModule({
  declarations: [EmployeesComponent, OptComponent],
  imports: [CommonModule, ResturantRoutingModule, SharedModule, MenuModule]
})
export class ResturantModule { }
