import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LinkedInService } from './linkedin-dialog.service';

@Component({
  selector: 'app-linkedin-dialog',
  templateUrl: './linkedin-dialog.component.html',
  styleUrls: ['./linkedin-dialog.component.sass'],
})
export class LinkedinDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LinkedinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private linkedInService: LinkedInService,
  ) { }

  ngOnInit() {
    this.initLinkedinProfile();
  }

  onExit() {
    this.dialogRef.close();
  }

  initLinkedinProfile() {
    this.linkedInService.getVivekProfile()
    .subscribe((resp: any) => {
      console.log('resp', resp);
    }, (err) => {
      console.log(err);
    });
    // return this.http.get('https://api.linkedin.com/v1/people/url=vtumrukota')

  }

}
