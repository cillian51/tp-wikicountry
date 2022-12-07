import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryI } from '../modeles/country-i';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private readonly http:HttpClient) { 
    this.getPersonnels();
  }

  countries:Array<CountryI> =[]


  getPersonnels(){
    this.http.get<CountryI[]>('assets/data/countries.json').subscribe({
      next : (c) => {
        this.countries = c;
      },
      error : (e) => {
        console.log('Error: ', e);
      },
      complete : () => {
        console.log('Complete');
      }
    })
  }


}
