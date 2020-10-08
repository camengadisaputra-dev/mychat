import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  contacts = [{
    username: 'cameng',
    profilePic: 'https://camengadisaputra-dev.github.io/picsample/img1.jpg',
    recentMessage: 'ok'
  }, {
    username: 'lode',
    profilePic: 'https://camengadisaputra-dev.github.io/picsample/img2.jpg',
    recentMessage: 'right'
  }];
  constructor() { }

  ngOnInit() {
  }

}
