import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/modules/shared.module';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, SharedModule],
  exports: [CardComponent],
})
export class CardModule {}
