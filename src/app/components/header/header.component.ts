import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuList = [{
    name: 'Home',
    state: 'home'
  }, {
    name: 'About',
    state: 'about'
  }, {
    name: 'Services',
    state: 'service'
  }];
  constructor() { }

  ngOnInit() {  }

}
