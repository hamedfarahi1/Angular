import { MenuModule } from "./../menu/menu.module";
import { SharedModule } from "./../Shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResturantRoutingModule } from "./resturant-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ResturantRoutingModule, SharedModule, MenuModule]
})
export class ResturantModule {}
