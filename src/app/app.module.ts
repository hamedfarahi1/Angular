import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { AppRoutingModule } from "./app-routing.module";
import { AlertModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { CreateComponent } from "./create/create.component";
import { UpdateNameComponent } from "./update-name/update-name.component";
import { DeleteComponent } from "./delete/delete.component";
import { FoodMenuComponent } from "./food-menu/food-menu.component";
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { SearchDialogComponent } from "./search-dialog/search-dialog.component";
import { FoodImageComponent } from './food-image/food-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CreateComponent,
    UpdateNameComponent,

    DeleteComponent,
    FoodMenuComponent,
    SearchDialogComponent,
    FoodImageComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteComponent, SearchDialogComponent, FoodImageComponent]
})
export class AppModule {}
