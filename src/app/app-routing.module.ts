import { FoodMenuComponent } from "./food-menu/food-menu.component";
import { UpdateNameComponent } from "./update-name/update-name.component";
import { CreateComponent } from "./create/create.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeleteComponent } from "./delete/delete.component";

const routes: Routes = [
  { path: "", component: FoodMenuComponent },
  { path: "create", component: CreateComponent },

  {
    path: "update-name",
    component: UpdateNameComponent
  },

  { path: "delete", component: DeleteComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
