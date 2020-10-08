import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { GesturesModule } from '@app/directives/gestures/gestures.module';
import { HeaderModule } from '@app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    GesturesModule,
    HeaderModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
