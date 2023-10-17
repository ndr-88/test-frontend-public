import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() name: string;
  @Input() active: boolean;
  @Input() type: string;
  @Output() emitSelected: EventEmitter<{ type: string; name: string }> =
    new EventEmitter<{ type: string; name: string }>();
  @Output() removeSelected: EventEmitter<{ type: string; name: string }> =
    new EventEmitter<{ type: string; name: string }>();

  toggleActive() {
    this.active = !this.active;
    if (this.active) {
      this.emitSelected.emit({ type: this.type, name: this.name });
    }
    if (!this.active) {
      this.removeSelected.emit({ type: this.type, name: this.name });
    }
  }
}
