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
  updatFood: UpdateFood = new UpdateFood();
  Message = "Update";
  idName = "ID";
  onKeyName(event: any) {
    this.updatFood.Id = event;
    this.updatFood.Name = event;
  }
  deleteById() {
    this.updatFood.GetBy = 1;
    this.idName = "ID";
    this.id = "ID";
    this.GetBy = 1;
  }
  deleteByName() {
    this.updatFood.GetBy = 0;
    this.idName = "Name";
    this.id = "Name";
    this.GetBy = 0;
  }
  ngOnInit() {
    this.GetBy = 1;
    this.updatFood.GetBy = 1;
  }
  delete() {
    if (this.updatFood.GetBy === 0) {
      this.updatFood.Id = null;
    } else {
      this.updatFood.Name = null;
    }
    console.log(this.updatFood);
    console.log(
      this.http
        .post("http://localhost:8080/api/Delete", this.updatFood)
        .subscribe(res => {
          console.log(res);
        })
    );
  }
}
