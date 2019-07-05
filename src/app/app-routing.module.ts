import { UpdatePriceComponent } from "./update-price/update-price.component";
import { UpdateNameComponent } from "./update-name/update-name.component";
import { UpdateComponent } from "./update/update.component";
import { CreateComponent } from "./create/create.component";
import { MenuComponent } from "./menu/menu.component";
import { SearchComponent } from "./search/search.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeleteComponent } from "./delete/delete.component";

const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "menu", component: MenuComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "create", component: CreateComponent },
  { path: "update", component: UpdateComponent },
  {
    path: "update-name",
    component: UpdateNameComponent
  },
  { path: "update-price", component: UpdatePriceComponent },
  { path: "delete", component: DeleteComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
