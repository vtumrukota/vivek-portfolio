import { Component, OnInit } from '@angular/core';
import { GithubDialogComponent } from './github-dialog/github-dialog.component';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { LinkedinDialogComponent } from './linkedin-dialog/linkedin-dialog.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openGithubDialog() {
    this.dialog.closeAll()
    let dialogRef = this.dialog.open(GithubDialogComponent, {
      width: '500px',
      data: { title: 'Viveks Title' }
    });
  }

  openLinkedInDialog() {
    this.dialog.closeAll()
    let dialogRef = this.dialog.open(LinkedinDialogComponent, {
      width: '500px',
      data: { title: 'Vivek'}
    });
  }
}


