import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Food } from "../Food";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "text/plain;charset=UTF-8" })
};
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  Message: any;
  ret: string;
  Menu: Food[];
  constructor(private http: HttpClient) {
    this.Message = "Menu";
    this.getJSONes();
  }
  ngOnInit() {}

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
