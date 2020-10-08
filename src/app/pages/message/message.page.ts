import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  username = '';
  messageList = [{
    username: 'cameng',
    messages: [{
      message: 'ok',
      timeStamp: '12:00'
    }, {
      message: 'right',
      timeStamp: '12:01'
    }]
  }, {
    username: 'lode',
    messages: [{
      message: 'right',
      timeStamp: '12:00'
    }, {
      message: 'yeah',
      timeStamp: '12:01'
    }]
  }];
  userMessages = [];
  constructor(private activeRouter: ActivatedRoute) { 
    this.activeRouter.params.subscribe((params) => {
      this.username = params['username'] ? params['username'] : '';
      this.userMessages = this.messageList.find((user) => {
        return user.username === this.username;
      }).messages;
      console.log(this.userMessages);
    })
  }

  ngOnInit() {
  }

}
