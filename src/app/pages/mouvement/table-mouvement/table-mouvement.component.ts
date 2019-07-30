import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-mouvement',
  templateUrl: './table-mouvement.component.html',
  styleUrls: ['./table-mouvement.component.scss']
})
export class TableMouvementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  // tslint:disable-next-line: no-use-before-declare
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}

export interface PeriodicElement {
  name: string;
  position: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 'Dirisi - CDAD - Pièce 7001',
    name: 'Dirisi - CDAD - Pièce 7111',
    symbol: '14/07/2018'
  },
  {
    position: 'Dirisi - CDAD - Pièce 7111',
    name: 'Dirisi - CDAD - Pièce 7114',
    symbol: '30/09/2018'
  },
  {
    position: 'Dirisi - CDAD - Pièce 7114',
    name: 'Dirisi - CDAD - Pièce 7002',
    symbol: '25/12/2018'
  },
  {
    position: 'Dirisi - CDAD - Pièce 7002',
    name: 'Dirisi - CDAD - Pièce 7202',
    symbol: '15/02/2019'
  },
  {
    position: 'Dirisi - CDAD - Pièce 7202',
    name: 'Dirisi - CDAD - Pièce 7105',
    symbol: '30/05/2019'
  }
];
