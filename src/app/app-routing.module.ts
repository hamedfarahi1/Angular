import { MenuComponent } from "./menu/menu.component";
import { SearchComponent } from "./search/search.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "menu", component: MenuComponent },
  { path: "", redirectTo: "", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
