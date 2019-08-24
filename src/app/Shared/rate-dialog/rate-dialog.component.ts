import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.scss']
})
export class RateDialogComponent implements OnInit {
  defaultImg = '../../../assets/images/thinking-face_1f914.png';
  imgSrc = '';
  constructor(private dialogRef: MatDialogRef<RateDialogComponent>) { }
  ngOnInit() {
    this.imgSrc = this.defaultImg;
  }
  onRate($event: { newValue: number }) {
    this.dialogRef.close($event.newValue);
  }
  onHover(event: MouseEvent) {
    // tslint:disable-next-line:no-string-literal
    if (event['path'][0].className === 'star' || event['path'][0].className === 'star on') {
      // tslint:disable-next-line:no-string-literal
      switch (+event.target['dataset'].index) {
        case 1: {
          console.log('fuck');
          this.imgSrc = '../../../assets/images/unamused-face_1f612.png';
          break;
        } case 2: {
          this.imgSrc = '../../../assets/images/slightly-smiling-face_1f642.png';
          break;
        } case 3: {
          this.imgSrc = '../../../assets/images/Upside-Down_Face_Emoji.png';
          break;
        } case 4: {
          this.imgSrc = '../../../assets/images/smiling-face-with-heart-shaped-eyes_1f60d.png';
          break;
        } case 5: {
          this.imgSrc = '../../../assets/images/kissing-face-with-closed-eyes_1f61a.png';
          break;
        }
      }

    }
  }
  exit() {
    this.dialogRef.close();
  }
}
