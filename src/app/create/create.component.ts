import { Food } from "./../Food";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "text/plain;charset=UTF-8" })
};
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  food: Food = new Food();
  constructor(private http: HttpClient) {}
  Message = "Tap to Add";
  ngOnInit() {}
  onKeyName(event: any) {
    this.food.name = event;
  }
  onKeyPrice(event: any) {
    this.food.price = event;
  }
  createFoodInfo() {
    console.log(
      this.http
        .post("http://localhost:8080/api/Create", this.food)
        .subscribe(res => {
          console.log(res["Report"]);
          this.Message = "Created";
        })
    );
  }
}
