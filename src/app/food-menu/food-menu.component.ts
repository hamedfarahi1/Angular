import { DeleteComponent } from "./../delete/delete.component";
import { Food } from "./../Food";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";

@Component({
  selector: "app-food-menu",
  templateUrl: "./food-menu.component.html",
  styleUrls: ["./food-menu.component.css"]
})
export class FoodMenuComponent implements OnInit {
  Message: any;
  ret: string;
  Menu: Food[];
  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.Message = "Menu";
    this.getJSONes();
  }
  ngOnInit() {}

  /** GET JSONes from the server */
  getJSONes() {
    console.log(
      this.http.get<string>("http://localhost:8080/api/Menu").subscribe(res => {
        this.Menu = res["Menu"];
      })
    );
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DeleteComponent, dialogConfig);
  }
}
