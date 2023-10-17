import { Pipe, PipeTransform } from '@angular/core';
import { Result } from 'src/models/result';

@Pipe({
  name: 'searchTerm',
})
export class SearchTermPipe implements PipeTransform {
  transform(items: Result[], searchTerm: string): Result[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter((item) => item.name.toLowerCase().includes(searchTerm));
  }
}
