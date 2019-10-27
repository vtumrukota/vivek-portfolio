import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-github-dialog',
  templateUrl: './github-dialog.component.html',
  styleUrls: ['./github-dialog.component.sass']
})
export class GithubDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GithubDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    console.log('constructor fired');
  }

  onExit(): void {
    this.dialogRef.close();
  }
}
