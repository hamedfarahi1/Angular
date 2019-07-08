import { FoodService } from "./../foodService";
import { UpdateFood } from "./../UpdateFood";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-update-name",
  templateUrl: "./update-name.component.html",
  styleUrls: ["./update-name.component.css"]
})
export class UpdateNameComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private foodService: FoodService
  ) {}
  updateFood: UpdateFood = new UpdateFood();
  Message = "Update";
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.updateFood.Id = params["id"];
    });
    this.foodService.getDetail(this.updateFood.Id).subscribe(res => {
      this.updateFood.NewName = res["name"];
      this.updateFood.NewPrice = res["price"];
    });
  }
  updateFoodInfo() {
    this.foodService.update(this.updateFood).subscribe(res => {
      this.Message = res["Report"];
      this.toastr.success("Updated", "Update Message");
    });
  }
}
