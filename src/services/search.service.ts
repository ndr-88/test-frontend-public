import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  emitSearchValue: Subject<string> = new Subject<string>();
  emitSearchValueObs: Observable<string> = this.emitSearchValue.asObservable();
  emitFilterValues: Subject<Map<string, string>> = new Subject<
    Map<string, string>
  >();
  emitFilterValuesObs = this.emitFilterValues.asObservable();

  constructor() {}
}
