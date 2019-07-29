import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() data;
  DeleteMessage = '';

  constructor(
    private dialogRef: MatDialogRef<DeleteComponent>) { }

  ngOnInit() { }
  delete() {

    this.data.service.delete(this.data.data).subscribe(res => {
      this.dialogRef.close(this.DeleteMessage);
    });

  }
  close() {
    this.dialogRef.close();
  }
}
