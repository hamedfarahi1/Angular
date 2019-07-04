import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Message: string;
  constructor(private http: HttpClient) {
    this.Message = "Hello";
  }

  getHeroes(): Observable<string> {
    return this.http
      .get<string>(
        "https://raw.githubusercontent.com/mshojaei88/footballapi/master/football.json"
      )
      .pipe(
        tap(_ => (this.Message = "Fucking")),
        catchError(_ => (this.Message = "Not"))
      );
  }

  get_products() {
    console.log(this.getHeroes());
  }
}
