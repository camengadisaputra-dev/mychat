import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { GesturesModule } from '@app/directives/gestures/gestures.module';
import { HeaderModule } from '@app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GesturesModule,
    ContactsPageRoutingModule,
    HeaderModule
  ],
  declarations: [ContactsPage]
})
export class ContactsPageModule {}
