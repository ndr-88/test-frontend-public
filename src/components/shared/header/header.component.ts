import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { CharactersSandbox } from 'src/sandbox/characters.sandbox';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() prevPage: string;
  @Input() nextPage: string;
  @Input() total: number;
  @Output() emitShowFilters = new EventEmitter<boolean>();
  pageNr: number;

  constructor(
    private charactersSandbox: CharactersSandbox,
    private searchService: SearchService
  ) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.nextPage !== null) {
      this.pageNr = this.getPageNumberFromUrl(this.nextPage);
    } else {
      this.pageNr = this.total;
    }
  }

  decreasePage() {
    if (this.prevPage !== null)
      this.charactersSandbox.emitPage.next(this.prevPage);
  }

  increasePage() {
    if (this.nextPage !== null)
      this.charactersSandbox.emitPage.next(this.nextPage);
  }

  getPageNumberFromUrl(url: string): number | null {
    const queryStringIndex = url.indexOf('?');
    if (queryStringIndex === -1) {
      return null;
    }

    const queryString = url.slice(queryStringIndex + 1);

    const queryParams = new URLSearchParams(queryString);

    const pageNumberString = queryParams.get('page');

    if (pageNumberString === null) {
      return null;
    }

    const pageNumber = parseInt(pageNumberString, 10);

    if (isNaN(pageNumber)) {
      return null;
    }

    return pageNumber - 1;
  }

  showFilters($event: boolean) {
    this.emitShowFilters.emit($event);
  }
}
