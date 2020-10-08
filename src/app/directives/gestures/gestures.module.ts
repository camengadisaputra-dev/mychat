import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GesturesDirective } from './gestures.directive';



@NgModule({
  declarations: [GesturesDirective],
  imports: [
    CommonModule
  ],
  exports: [GesturesDirective]
})
export class GesturesModule { }
