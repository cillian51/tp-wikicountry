import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  //Paramètre pour filtrer les modèles
  filtreCountry:string='';

  constructor() { 
  }

  ngOnInit(): void {
  }


}
