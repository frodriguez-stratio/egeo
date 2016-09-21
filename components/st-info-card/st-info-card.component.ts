import { Component, Input} from '@angular/core';

@Component({
  selector: 'st-info-card',
  template: require('./st-info-card.component.html'),
  styles: [require('./st-info-card.component.scss')]
})

export class StInfoCardComponent {
  @Input() photo: string;
  @Input() title: string;
  @Input() description: string;

  constructor() {
  }

  showArrow(): void {

  }
}