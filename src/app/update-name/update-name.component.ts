import { UpdateFood } from "./../UpdateFood";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-update-name",
  templateUrl: "./update-name.component.html",
  styleUrls: ["./update-name.component.css"]
})
export class UpdateNameComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  updateFood: UpdateFood = new UpdateFood();
  Message = "Update";
  idName = "ID";
  onKeyName(event: any) {
    this.updateFood.NewName = event;
  }
  onKeyNewName(event: any) {
    this.updateFood.NewPrice = event;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.updateFood.GetBy = 1;
      this.updateFood.NewName = params["name"];
      this.updateFood.NewPrice = params["price"];
      this.updateFood.Id = params["id"];
    });
  }
  updateFoodInfo() {
    console.log(this.updateFood);
    console.log(
      this.http
        .post("http://localhost:8080/api/Update", this.updateFood)
        .subscribe(res => {
          console.log(res);
        })
    );
    this.Message = "Updated";
  }
}
