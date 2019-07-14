import { TableHmdComponent } from "./table-hmd/table-hmd.component";
import { SharedModule } from "./../Shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuRoutingModule } from "./menu-routing.module";

@NgModule({
  declarations: [TableHmdComponent],
  imports: [CommonModule, SharedModule, MenuRoutingModule],
  exports: [TableHmdComponent],
  entryComponents: [TableHmdComponent]
})
export class MenuModule {}
