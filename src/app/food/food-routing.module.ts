import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FoodMenuComponent } from "./food-menu/food-menu.component";
import { OptionsComponent } from "./options/options.component";
const routes: Routes = [
  { path: "food", component: FoodMenuComponent },
  { path: "food/create", component: OptionsComponent },

  {
    path: "food/update/:id",
    component: OptionsComponent
  },
  {
    path: "food/detail/:id",
    component: OptionsComponent
  },

  { path: "food/delete/:id", component: FoodMenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule {}
