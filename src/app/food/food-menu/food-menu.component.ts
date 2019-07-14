import { TableData } from "./../tableData";
import { FoodDetail } from "../FoodDetail";
import { Router, Route, ActivatedRoute } from "@angular/router";
import { FoodService } from "../foodService";
import { DeleteComponent } from "./../delete/delete.component";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-food-menu",
  templateUrl: "./food-menu.component.html",
  styleUrls: ["./food-menu.component.css"]
})
export class FoodMenuComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private toastr: ToastrService,
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}
  tableData: TableData;
  deleteMessage: string;
  searchBoxName = "";
  searchBoxPrice = "";

  ngOnInit() {
    let path = "";
    this.route.url.subscribe(param => {
      if (param[1]) {
        path = param[1]["path"];
      }
      if (path === "delete") {
        this.route.params.subscribe(params => {
          this.openDeleteDialog(params["id"]);
        });
      }
    });
    if (!this.tableData) {
      this.tableData = <TableData>{};
      this.foodService.showMenu().subscribe(res => {
        if (res["Menu"]) {
          this.tableData = {
            data: res["Menu"],
            columns: [
              {
                field: "name",
                label: "نام غذا"
              },
              {
                field: "price",
                label: "قیمت",
                type: "number"
              },
              {
                field: "type",
                label: "نوع",
                type: "KeyValue",
                pipeParam: this.foodService.getTypes()
              },
              {
                field: "id",
                label: "شماره غذا"
              },
              {
                field: "time",
                label: "تاریخ ثبت",
                type: "time",
                format: "YYYY/MM/D"
              }
            ],
            actions: { update: true, delete: true }
          };
        }
      });
    }
  }

  search() {
    let t = this.tableData;
    let food = <FoodDetail>{};
    if (!isNaN(+this.searchBoxPrice) && this.searchBoxPrice.length > 0) {
      food.price = this.searchBoxPrice;
    } else food.price = "0";
    if (this.searchBoxName) {
      food.name = this.searchBoxName;
    } else food.name = "";
    this.foodService.search(food).subscribe(res => {
      t.data = res["Menu"];
      this.tableData = <TableData>{};
      this.tableData.data = t.data;
      this.tableData.columns = t.columns;
      this.tableData.actions = t.actions;
    });
  }

  openDeleteDialog(value: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "200px";
    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig);
    dialogRef.componentInstance.data = value;
    dialogRef.afterClosed().subscribe(data => {
      this.deleteMessage = data;
      if (data) {
        this.toastr.success(this.deleteMessage, "Delete Message ");
      }
    });
  }
}
