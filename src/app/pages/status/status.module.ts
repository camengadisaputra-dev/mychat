import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusPageRoutingModule } from './status-routing.module';

import { StatusPage } from './status.page';
import { GesturesModule } from '@app/directives/gestures/gestures.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GesturesModule,
    StatusPageRoutingModule
  ],
  declarations: [StatusPage]
})
export class StatusPageModule {}