import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AlertModule } from "ngx-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./Shared/shared.module";
import { FoodModule } from "./food/food.module";
import { ToastrModule } from "ngx-toastr";
import { MenuModule } from "./menu/menu.module";
import { ResturantModule } from './resturant/resturant.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ToastrModule.forRoot(),
    FoodModule,
    SharedModule,
    MenuModule,
    ResturantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
