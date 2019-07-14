import { FoodService } from "./../../food/foodService";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { TableData } from "src/app/food/tableData";

@Component({
  selector: "app-table-hmd",
  templateUrl: "./table-hmd.component.html",
  styleUrls: ["./table-hmd.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableHmdComponent implements OnInit {
  types: any;

  @Input() tableData1: TableData;

  constructor(foodService: FoodService) {
    this.types = foodService.getTypes();
  }

  ngOnInit() {}
}
