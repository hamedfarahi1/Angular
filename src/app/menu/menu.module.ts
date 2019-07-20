import { TableHmdComponent } from './table-hmd/table-hmd.component';
import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { DeleteComponent } from './delete/delete.component';
@NgModule({
  declarations: [TableHmdComponent, SearchFilterComponent, DeleteComponent],
  imports: [CommonModule, SharedModule, MenuRoutingModule],
  exports: [TableHmdComponent],
  entryComponents: [TableHmdComponent, DeleteComponent]
})
export class MenuModule { }
