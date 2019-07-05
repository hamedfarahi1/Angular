import { UpdateFood } from "./../UpdateFood";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})
export class UpdateComponent implements OnInit {
  GetBy: number;
  id = "ID";
  constructor() {}
  updateById() {
    this.id = "ID";
    this.GetBy = 1;
  }
  updateByName() {
    this.id = "Name";
    this.GetBy = 0;
  }
  ngOnInit() {
    this.GetBy = 1;
  }
}
