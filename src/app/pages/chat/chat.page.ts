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
    recentMessage: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a ',
    timeStamp: '12:30'
  }, {
    username: 'lode',
    profilePic: 'https://camengadisaputra-dev.github.io/picsample/img2.jpg',
    recentMessage: 'right',
    timeStamp: '13:30'
  }];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSwipe($event) {
    if ($event === 'right') {
      this.router.navigate(['/tabs/status']);
    }
  }

  newMessage() {
    this.router.navigate(['/message']);
  }

  openMessage(data) {
    const { username } = data;
    this.router.navigate(['/message', {username}])
  }

}
