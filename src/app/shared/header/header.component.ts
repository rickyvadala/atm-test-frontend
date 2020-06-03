import { Component, HostListener, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../services/windows.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit  {
  public activeClass = 'home';
  public homeOffset: any = null;
  public aboutOffset: any = null;
  public contactOffset: any = null;
  public isOpenMobile = false;
  public darkHeader = false;
  public menuItems: any[];

  constructor(
               @Inject(DOCUMENT) private document: Document,
               @Inject(WINDOW) private window,
               public breakpointObserver: BreakpointObserver

  ) { }

  ngAfterViewInit() {
    this.homeOffset = document.getElementById('home') ? document.getElementById('home').offsetTop : 0;
    this.contactOffset = document.getElementById('atm') ? document.getElementById('atm').offsetTop : 0;
  }
   active(val) {
      this.activeClass = val;
   }

  // @HostListener Decorator
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.darkHeader = number >= 60;
    let mediaOffset;
    this.breakpointObserver
    .observe(['(min-width: 991px)'])
    .subscribe((state: BreakpointState) => {
      if (!state.matches) {
        mediaOffset = 70;
      } else {
        mediaOffset = 0;
      }
          if (window.pageYOffset >= this.homeOffset && window.pageYOffset < this.aboutOffset - mediaOffset) {
            this.activeClass = 'home';
          } else if (window.pageYOffset >= this.contactOffset - mediaOffset) {
            this.activeClass = 'contact';
          } else {
            this.activeClass = 'home';
          }
  });
}

}
