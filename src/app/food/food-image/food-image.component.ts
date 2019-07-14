import { FoodService } from "../foodService";
import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-food-image",
  templateUrl: "./food-image.component.html",
  styleUrls: ["./food-image.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FoodImageComponent implements OnInit {
  @Input() id: number;
  constructor() {}
  ngOnInit() {}
}
