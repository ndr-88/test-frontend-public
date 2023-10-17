import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MultiFilterPipe } from 'src/pipes/multi-filter.pipe';
import { SearchTermPipe } from 'src/pipes/search-term.pipe';
import { FilterComponent } from '../components/filter/filter.component';
import { HeaderComponent } from '../components/shared/header/header.component';
import { PillComponent } from '../components/shared/pills/pills.component';
import { SearchComponent } from '../components/search/search.component';

@NgModule({
  declarations: [
    PillComponent,
    HeaderComponent,
    SearchTermPipe,
    MultiFilterPipe,
    FilterComponent,
    SearchComponent,
  ],
  imports: [CommonModule],
  exports: [
    PillComponent,
    HeaderComponent,
    SearchTermPipe,
    MultiFilterPipe,
    FilterComponent,
  ],
})
export class SharedModule {}
