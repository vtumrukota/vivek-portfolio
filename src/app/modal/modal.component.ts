import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() component: Component;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {  // void is implied
    // let dialogRef = this.dialog.open(this.component, {
    //   height: '400px',
    //   width: '600px',
    // });
  }

}
