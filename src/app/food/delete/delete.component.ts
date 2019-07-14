import { FoodService } from "../foodService";
import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.css"]
})
export class DeleteComponent implements OnInit {
  @Input() data;
  Message = "Delete Food";
  DeleteMessage = "";

  constructor(
    private dialogRef: MatDialogRef<DeleteComponent>,
    private foodeService: FoodService,
    private router: Router
  ) {}

  ngOnInit() {}
  delete() {
    console.log(this.data);
    console.log(typeof this.data);

    this.foodeService.delete(this.data).subscribe(res => {
      console.log(res);
      this.dialogRef.close(this.DeleteMessage);
      this.Message = "Deleted";
      this.router.navigate(["food"]);
    });
  }
  close() {
    this.dialogRef.close();
    this.router.navigate(["food"]);
  }
}
