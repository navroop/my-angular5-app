import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  thumbnailData = [{
    name: 'One-Plus',
    description: `Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    imagename: 'oneplus.jpg'
  }, {
    name: 'Apple',
    description: `Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    imagename: 'iphone.jpg'
  }, {
    name: 'Samsung',
    description: `Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
    imagename: 'samsung.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
