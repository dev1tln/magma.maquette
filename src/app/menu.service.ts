import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  constructor() {}

  getMenu(): Array<any> {
    const menu = [
      {
        name: 'authentification',
        path: './authentification',
        children: []
      },
      {
        name: 'Accueil',
        path: './accueil',
        children: [
          {
            name: 'Lieu',
            path: './inventaire',
            children: [
              {
                name: 'Inventaire',
                path: './inventaire_in_progress',
                children: [
                  {
                    name: 'Détails',
                    path: './details'
                  }
                ]
              },
              {
                name: 'THE RETURN OF THE KING',
                path: './details'
              },
              {
                name: 'Harry Potter and the Philosopher\'s Stone',
                path: './details'
              },
              {
                name: 'Harry Potter and the Chamber of Secrets',
                path: './details'
              }
            ]
          }
        ]
      }
    ];

    return menu;
  }
}
