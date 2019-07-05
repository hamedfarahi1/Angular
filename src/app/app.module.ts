import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { AppRoutingModule } from "./app-routing.module";
import { MenuComponent } from "./menu/menu.component";
import { AlertModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, MenuComponent, ResultComponent],
  imports: [
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
