import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CountryI } from '../modeles/country-i';
import { CountriesService } from '../services/countries.service';
//import { filtreCountry} from '../header/header.component'

@Component({
  selector: 'app-country-infos',
  templateUrl: './country-infos.component.html',
  styleUrls: ['./country-infos.component.css']
})
export class CountryInfosComponent implements OnInit {

  //Paramètre pour filtrer les modèles
  filtreCountry: string = '';
  country?: CountryI;

  constructor(public countryServ: CountriesService) {
  }

  ngOnInit(): void {
  }

  openInfoCountry(c: CountryI): void {
    this.country = c;
  }
}


