import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
