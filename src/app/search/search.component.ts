import { SearchFood } from "./../SearchFood";
import { Food } from "../Food";
import { Component, OnInit, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "text/plain;charset=UTF-8" })
};
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  food: SearchFood = new SearchFood();
  foods: Food[];
  Message: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  onKey(event: any) {
    this.food.SubName = event.target.value;
  }
  get_result() {
    this.food.SearchOption = 1;
    console.log(
      this.http
        .post("http://localhost:8080/api/Search", this.food)
        .subscribe(res => {
          this.foods = res["Menu"];
        })
    );
    console.log(this.foods);
  }
}
