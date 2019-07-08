import { FoodService } from "./../foodService";
import { Router } from "@angular/router";
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
  Message = "Tap to Add";

  constructor(private router: Router, private foodService: FoodService) {}

  ngOnInit() {}

  createFoodInfo() {
    this.foodService.create(this.food).subscribe(res => {
      this.Message = res["Report"];
    });
  }
}
