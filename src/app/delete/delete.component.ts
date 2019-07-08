import { FoodService } from "./../foodService";
import { UpdateFood } from "./../UpdateFood";
import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.css"]
})
export class DeleteComponent implements OnInit {
  @Input() data;
  updateFood: UpdateFood = new UpdateFood();
  Message = "Delete Food";
  DeleteMessage = "";

  constructor(
    private dialogRef: MatDialogRef<DeleteComponent>,
    private foodeService: FoodService
  ) {}

  ngOnInit() {
    this.updateFood.Id = this.data.Id;
  }
  delete() {
    this.foodeService.delete(this.updateFood).subscribe(res => {
      this.dialogRef.close(this.DeleteMessage);
      this.Message = "Deleted";
    });
  }
  close() {
    this.dialogRef.close();
  }
}
