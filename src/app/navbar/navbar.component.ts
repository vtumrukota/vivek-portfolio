import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';


interface ISocialLink {
  class: string;
  href: string;
  imgUrl: string;
  tooltip: string;
}

// Social Icon + Link Information
const NAVBAR_SOCIAL_LINKS: ISocialLink[] = [
  {
    class: 'linkedin',
    href: 'https://www.linkedin.com/in/vtumrukota/',
    imgUrl: '../../assets/images/social/linkedin.png',
    tooltip: 'Linkedin',
  },
  {
    class: 'github',
    href: 'https://github.com/vtumrukota',
    imgUrl: '../../assets/images/social/github.png',
    tooltip: 'GitHub',
  },
  {
    class: 'angellist',
    href: 'https://angel.co/vivekt',
    imgUrl: '../../assets/images/social/angellist.png',
    tooltip: 'AngelList',
  },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  private socialIcons: ISocialLink[] = NAVBAR_SOCIAL_LINKS;
  private tooltipPos: TooltipPosition = 'below';
  private position = new FormControl(this.tooltipPos);

  constructor() { }

  ngOnInit() {
  }

}
