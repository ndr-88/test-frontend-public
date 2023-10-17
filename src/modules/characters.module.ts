import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharactersSandbox } from 'src/sandbox/characters.sandbox';
import { CharactersContainerComponent } from '../containers/characters-container/characters-container.component';
import { CardModule } from './card.module';

@NgModule({
  declarations: [CharactersContainerComponent],
  imports: [CommonModule, CardModule, InfiniteScrollModule],
  exports: [CharactersContainerComponent],
  providers: [CharactersSandbox],
})
export class CharactersModule {}
