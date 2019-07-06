import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { AppRoutingModule } from "./app-routing.module";
import { MenuComponent } from "./menu/menu.component";
import { AlertModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { ResultComponent } from "./result/result.component";
import { CreateComponent } from "./create/create.component";
import { UpdateComponent } from "./update/update.component";
import { UpdateNameComponent } from "./update-name/update-name.component";
import { UpdatePriceComponent } from "./update-price/update-price.component";
import { DeleteComponent } from "./delete/delete.component";
import { FoodMenuComponent } from "./food-menu/food-menu.component";
import { MatDialogModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuComponent,
    ResultComponent,
    CreateComponent,
    UpdateComponent,
    UpdateNameComponent,
    UpdatePriceComponent,
    DeleteComponent,
    FoodMenuComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
