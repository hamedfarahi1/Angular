import { UpdateFood } from "./../UpdateFood";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.css"]
})
export class DeleteComponent implements OnInit {
  GetBy: number;
  id = "ID";
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  updateFood: UpdateFood = new UpdateFood();
  Message = "Update";
  idName = "ID";

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.updateFood.GetBy = 1;
      this.updateFood.Id = params["id"];
    });
  }
  delete() {
    console.log(this.updateFood);
    console.log(
      this.http
        .post("http://localhost:8080/api/Delete", this.updateFood)
        .subscribe(res => {
          console.log(res);
        })
    );
  }
}
