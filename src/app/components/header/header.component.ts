import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = {
    name: 'cameng',
    profilePic: 'https://camengadisaputra-dev.github.io/picsample/img1.jpg'
  }
  constructor() { 
  }

  ngOnInit() {}

}
