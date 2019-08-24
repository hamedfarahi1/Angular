import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { RateDialogComponent } from '../rate-dialog/rate-dialog.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  num = 0;
  @Input() rate: number;
  constructor(private dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit() {
    console.log(this.rate);
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
  openRateDialog(event: MouseEvent) {
    event.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'dialogBox';
    const dialogRef = this.dialog.open(RateDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.toastr.success('از امتیاز دهی شما متشکریم', 'امتیاز: ' + data);
      }
    });
  }
}
