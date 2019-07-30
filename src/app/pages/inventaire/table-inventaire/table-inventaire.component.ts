import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-inventaire',
  templateUrl: './table-inventaire.component.html',
  styleUrls: ['./table-inventaire.component.scss']
})
export class TableInventaireComponent implements OnInit {
  displayedColumns: string[] = ['name', 'symbol'];
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {}

  ngOnInit() {}
}

export interface PeriodicElement {
  name: string;
  // position: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Fauteuil gamer', symbol: '=' },
  { name: 'Fauteuil de bureau', symbol: '+' },
  { name: 'Caisson bureau', symbol: '+' },
  { name: 'Horloge', symbol: '-' },
  { name: 'Poster Cpt America', symbol: '-' },
  { name: 'Climatiseur', symbol: '-' },
  { name: 'Fauteuil gamer', symbol: '=' },
  { name: 'Climatiseur', symbol: '-' },
  { name: 'Lampe', symbol: '-' }
];
