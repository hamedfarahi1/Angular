import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Message: any;
  ret: string;
  constructor(private http: HttpClient) {
    this.Message = "Menu";
  }

  /** GET JSONes from the server */
  getJSONes() {
    console.log(
      this.http
        .get<string>("https://jsonplaceholder.typicode.com/todos/1")
        .subscribe(res => {
          console.log(res["title"]);
          this.Message = res["title"];
        })
    );
  }
}
