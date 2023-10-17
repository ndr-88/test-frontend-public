import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() imgSrc: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() tag: string;
  @Input() description: string;

  constructor() {}
}
