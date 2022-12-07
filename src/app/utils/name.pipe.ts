import { Pipe, PipeTransform } from '@angular/core';
import { CountryI } from '../modeles/country-i';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(countries: Array<CountryI>, filtre?: string): Array<CountryI> {
    if (!filtre || filtre.length == 0) return countries;
    if (countries.length ==0) return [];

    return countries.filter(c => c.name.common.toLowerCase().indexOf(filtre.toLowerCase()) != -1);
  }

}
