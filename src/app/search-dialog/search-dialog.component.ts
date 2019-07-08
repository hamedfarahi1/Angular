import { FoodService } from "./../foodService";
import { Food } from "./../Food";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-search-dialog",
  templateUrl: "./search-dialog.component.html",
  styleUrls: ["./search-dialog.component.css"]
})
export class SearchDialogComponent implements OnInit {
  food: Food = new Food();
  constructor(
    private foodService: FoodService,
    private dialogRef: MatDialogRef<SearchDialogComponent>
  ) {}

  ngOnInit() {
    this.food.name = "";
    this.food.price = "0";
  }
  search() {
    this.foodService.search(this.food).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  close() {
    this.dialogRef.close();
  }
}
