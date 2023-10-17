import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Filters } from 'src/models/filters';
import { gender } from 'src/models/gender';
import { species } from 'src/models/species';
import { status } from 'src/models/status';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  private inputSubject = new Subject<string>();
  Gender = gender;
  Species = species;
  Status = status;
  genderValue: string;
  speciesValue: string;
  statusValue: string;
  showFilters: boolean = false;
  destroy$: Subject<void> = new Subject<void>();
  filterMap: Map<Filters, string> = new Map<Filters, string>();
  @Output() emitShowFilters = new EventEmitter<boolean>();

  constructor(
    private searchService: SearchService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.inputSubject.pipe(takeUntil(this.destroy$)).subscribe((text) => {
      this.searchService.emitSearchValue.next(text);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onInput(event: any) {
    const inputText = event.target.value;
    this.inputSubject.next(inputText);
  }
  getSelected($event: { type: string; name: string }) {
    if ($event.type.toLowerCase() === 'gender') {
      this.genderValue = $event.name;
      this.filterMap.set(Filters.gender, this.genderValue);

      this.searchService.emitFilterValues.next(this.filterMap);
      this.cdRef.detectChanges();
    }
    if ($event.type.toLowerCase() === 'species') {
      this.speciesValue = $event.name;
      this.filterMap.set(Filters.species, this.speciesValue);

      this.searchService.emitFilterValues.next(this.filterMap);
      this.cdRef.detectChanges();
    }
    if ($event.type.toLowerCase() === 'status') {
      this.statusValue = $event.name;
      this.filterMap.set(Filters.status, this.statusValue);

      this.searchService.emitFilterValues.next(this.filterMap);
      this.cdRef.detectChanges();
    }
  }

  removeSelected($event: { type: string; name: string }) {
    if ($event.type.toLowerCase() === 'gender') {
      this.genderValue = $event.name;
      this.filterMap.delete(Filters.gender);

      this.searchService.emitFilterValues.next(this.filterMap);
      this.cdRef.detectChanges();
    }
    if ($event.type.toLowerCase() === 'species') {
      this.speciesValue = $event.name;
      this.filterMap.delete(Filters.species);

      this.searchService.emitFilterValues.next(this.filterMap);
      this.cdRef.detectChanges();
    }
    if ($event.type.toLowerCase() === 'status') {
      this.statusValue = $event.name;
      this.filterMap.delete(Filters.status);

      this.searchService.emitFilterValues.next(this.filterMap);
      this.cdRef.detectChanges();
    }
  }
  toggleShowFilters() {
    this.showFilters = !this.showFilters;
    this.emitShowFilters.emit(this.showFilters);
  }
}
