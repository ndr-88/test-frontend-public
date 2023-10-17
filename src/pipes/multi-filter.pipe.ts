import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiFilter',
})
export class MultiFilterPipe implements PipeTransform {
  transform(items: any[], filters: Map<string, string>): any[] {
    if (!items || !filters) {
      return items;
    }

    return items.filter((item) => {
      // Filtraggio per "gender"
      let match = true;
      if (
        filters.has('gender') &&
        item.gender.toLowerCase() !== filters.get('gender').toLowerCase()
      ) {
        match = false;
      }

      // Filtraggio per "status"
      if (
        filters.has('status') &&
        item.status.toLowerCase() !== filters.get('status').toLowerCase()
      ) {
        match = false;
      }

      // Filtraggio per "species"
      if (
        filters.has('species') &&
        item.species.toLowerCase() !== filters.get('species').toLowerCase()
      ) {
        match = false;
      }
      return match;
    });
  }
}
