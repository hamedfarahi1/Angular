import { FoodService } from "./../foodService";
import { UpdateFood } from "./../UpdateFood";
import { DeleteComponent } from "./../delete/delete.component";
import { Food } from "./../Food";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ToastrService } from "ngx-toastr";
import { SearchDialogComponent } from "../search-dialog/search-dialog.component";

@Component({
  selector: "app-food-menu",
  templateUrl: "./food-menu.component.html",
  styleUrls: ["./food-menu.component.css"]
})
export class FoodMenuComponent implements OnInit {
  Menu: Food[];
  deleteFood: UpdateFood = new UpdateFood();
  deleteMessage: string;
  imageUrl = "";
  constructor(
    private dialog: MatDialog,
    private toastr: ToastrService,
    private foodService: FoodService
  ) {}
  ngOnInit() {
    this.reloadMenu();
  }

  reloadMenu() {
    this.foodService.showMenu().subscribe(res => {
      this.Menu = res["Menu"];
    });
  }
  selectedItem(data: any) {
    this.imageUrl = data;
  }
  openSearchDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "300px";
    const dialogRef = this.dialog.open(SearchDialogComponent);
    dialogRef.afterClosed().subscribe(data => {
      if (data) this.Menu = data["Menu"];
    });
  }
  openDeleteDialog(event: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "200px";
    this.deleteFood = event;
    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig);
    dialogRef.componentInstance.data = this.deleteFood;
    dialogRef.afterClosed().subscribe(data => {
      this.deleteMessage = data;
      if (data) {
        this.reloadMenu();
        this.toastr.success(this.deleteMessage, "Delete Message ");
      }
      this.reloadMenu();
    });
  }
}
