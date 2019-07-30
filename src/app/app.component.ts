import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MAGMA';
  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.getMenu();
    // this.listenRouting();
  }

  // listenRouting() {
  //   // tslint:disable-next-line: one-variable-per-declaration
  //   let routerUrl: string, routerList: Array<any>, target: any;
  //   this._router.events.subscribe((router: any) => {
  //     routerUrl = router.urlAfterRedirects;
  //     if (routerUrl && typeof routerUrl === 'string') {
  //       target = this.menu;
  //       this.breadcrumbList.length = 0;
  //       routerList = routerUrl.slice(1).split('/');
  //       console.log(routerList);
  //       routerList.forEach((router, index) => {
  //         target = target.find(page => page.path.slice(2) === router);
  //         this.breadcrumbList.push({
  //           name: target.name,
  //           path:
  //             index === 0
  //               ? target.path
  //               : `${this.breadcrumbList[index - 1].path}/${target.path.slice(
  //                   2
  //                 )}`
  //         });

  //         if (index + 1 !== routerList.length) {
  //           target = target.children;
  //         }
  //       });

  //       console.log(this.breadcrumbList);
  //     }
  //   });
  // }
}
