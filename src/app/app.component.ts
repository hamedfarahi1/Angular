import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { Food } from "./Food";
import { Options } from "selenium-webdriver/safari";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "text/plain;charset=UTF-8" })
};
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Message: any;
  ret: string;
  Menu: Food[];
  constructor(private http: HttpClient) {
    this.Message = "Menu";
    this.getJSONes();
  }

  /** GET JSONes from the server */
  getJSONes() {
    console.log(
      this.http
        .get<string>("http://localhost:8080/api/Menu", httpOptions)
        .subscribe(res => {
          this.Menu = res["Menu"];
        })
    );
  }
}
