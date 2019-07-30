import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}

export interface PeriodicElement {
  name: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Désignation', name: 'Fauteuil gamer' },
  { position: 'Identifiant', name: '0000004' },
  { position: 'NNO', name: '4885-90-000-7554' },
  { position: 'RAD', name: '5555647' },
  { position: 'N° série ', name: 'RF-4560' },
  { position: 'Prix', name: '399,90€' }
];
