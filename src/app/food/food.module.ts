import { OptionsComponent } from "./options/options.component";
import { TableHmdComponent } from "./../menu/table-hmd/table-hmd.component";
import { MenuModule } from "./../menu/menu.module";
import { SharedModule } from "../Shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FoodRoutingModule } from "./food-routing.module";
import { DeleteComponent } from "./delete/delete.component";
import { FoodMenuComponent } from "./food-menu/food-menu.component";
import { FoodImageComponent } from "./food-image/food-image.component";

@NgModule({
  declarations: [
    OptionsComponent,
    DeleteComponent,
    FoodMenuComponent,
    FoodImageComponent
  ],
  imports: [CommonModule, FoodRoutingModule, SharedModule, MenuModule],
  entryComponents: [DeleteComponent, TableHmdComponent]
})
export class FoodModule {}
