import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';

@Directive({
  selector: '[appGestures]'
})
export class GesturesDirective {

  @Output() swipe = new EventEmitter();

  swipeDirection = null;
  constructor(private gestureCtrl: GestureController,
    private el: ElementRef) {
      this.createGesture();
  }

  createGesture(name?) {
    const gesture = this.gestureCtrl.create({
      gestureName: name ? name : 'swipe',
      el: this.el.nativeElement,
      onMove: ($event) => {
        this.handleMoving('moving', $event);
      },
      onEnd: ($event) => {
        this.handleMoving('moveend', $event);
      }
    }, true);
    gesture.enable();
  }

  handleMoving(name, $event) {
    const deltaX = $event.deltaX;
    const absDeltaX = Math.abs(deltaX);

    if (absDeltaX > 200) {
      if (deltaX > 0) {
        this.swipeDirection = 'left'
      } else {
        this.swipeDirection = 'right'
      }
    } else {
      this.swipeDirection = null;
    }

    if (name === 'moveend') {
      this.swipe.emit(this.swipeDirection);
    }
  }

}
