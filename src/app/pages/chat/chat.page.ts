import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSwipe($event) {
    if ($event === 'right') {
      this.router.navigate(['/tabs/status']);
    }
  }

}
