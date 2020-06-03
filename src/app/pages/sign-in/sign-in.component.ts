import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // variable
  show: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta) {
  // initialize variable value
   this.show = false;
  }

  // click event function toggle
  password() {
   this.show = !this.show;
  }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }

  login() {
    this.router.navigateByUrl('pages/atm');
  }
}
