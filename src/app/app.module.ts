import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuService } from './menu.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { BigButtonComponent } from './pages/accueil/big-button/big-button.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import { ScanComponent } from './scan/scan.component';
import { InventaireInProgressComponent } from './pages/inventaire/inventaire-in-progress/inventaire-in-progress.component';
import { DetailsComponent } from './details/details.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { ListeUniteComponent } from './pages/choixUnite/liste-unite/liste-unite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniteChoixComponent } from './pages/choixUnite/unite-choix/unite-choix.component';
import { TableInventaireComponent } from './pages/inventaire/table-inventaire/table-inventaire.component';
import { TableMouvementComponent } from './pages/mouvement/table-mouvement/table-mouvement.component';
import { MouvementComponent } from './pages/mouvement/mouvement/mouvement.component';

const appRoutes: Routes = [
  { path: 'authentification', component: AuthComponent },
  { path: 'choix_unite', component: UniteChoixComponent },
  { path: 'accueil', component: BigButtonComponent },
  {
    path: 'accueil/inventaire_in_progress',
    component: InventaireInProgressComponent
  },
  {
    path: 'accueil/inventaire_in_progress/details',
    component: DetailsComponent
  },
  {
    path: 'accueil/inventaire_in_progress/mouvement',
    component: MouvementComponent
  },
  { path: 'accueil/inventaire', component: InventaireComponent },
  { path: 'scan_lieu', component: ScanComponent },

  { path: '', component: AuthComponent },
  { path: '**', component: AuthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    MainNavComponent,
    BigButtonComponent,
    InventaireComponent,
    ScanComponent,
    InventaireInProgressComponent,
    DetailsComponent,
    TableDetailsComponent,
    ListeUniteComponent,
    UniteChoixComponent,
    TableInventaireComponent,
    TableMouvementComponent,
    MouvementComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
