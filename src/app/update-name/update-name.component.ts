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
  updatFood: UpdateFood = new UpdateFood();
  Message = "Update";
  idName = "ID";
  onKeyName(event: any) {
    this.updatFood.Name = event;
    this.updatFood.Id = +event;

    console.log(this.updatFood.Name);
  }
  onKeyNewName(event: any) {
    this.updatFood.NewName = event;
    console.log(this.updatFood.NewName);
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.updatFood.GetBy = params["getBy"];
      console.log(params["getBy"]);
    });
    if (this.updatFood.GetBy == 0) {
      this.idName = "Name";
    } else if (this.updatFood.GetBy == 1) {
      this.idName = "ID";
    }
  }
  updateFoodInfo() {
    this.updatFood.NewPrice = "N";
    console.log(this.updatFood);
    console.log(
      this.http
        .post("http://localhost:8080/api/Update", this.updatFood)
        .subscribe(res => {
          console.log(res);
        })
    );
    this.Message = "Updated";
  }
}
