import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSwipe($event) {
    if ($event === 'right') {
      this.router.navigate(['/tabs/contacts']);
    } else if ($event === 'left') {
      this.router.navigate(['/tabs/chat']);
    }
  }

}
