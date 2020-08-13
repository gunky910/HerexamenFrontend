import { NavbarComponent } from './gebruiker/navbar/navbar.component';
import { StemComponent } from './gebruiker/stem/stem.component';
import { NieuweItemComponent } from './gebruiker/nieuwe-item/nieuwe-item.component';
import { NieuweLijstComponent } from './gebruiker/nieuwe-lijst/nieuwe-lijst.component';
import { DashboardComponent } from './gebruiker/dashboard/dashboard.component';
import { StemmenComponent } from './gebruiker/stemmen/stemmen.component';
import { LijstenbeherenComponent } from './gebruiker/lijstenbeheren/lijstenbeheren.component';
import { RegistrerenComponent } from './gebruiker/registreren/registreren.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InloggenComponent } from './gebruiker/inloggen/inloggen.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'; 

const appRoutes: Routes = [
  {path: "login", component: InloggenComponent},
  {path: "registratie", component: RegistrerenComponent},
  {path: "lijstToevoegen", component: NieuweLijstComponent},
  {path: "stemmen", component: StemmenComponent},
  {path: "stemmen/:id", component: StemmenComponent},
  {path: "dashboard", component: DashboardComponent},
  // {path: "itemToevoegen", component: NieuweItemComponent},
  { path:"itemToevoegen/:id", component: NieuweItemComponent},
  {path:"stem/:id", component: StemComponent},
  {path: "lijstenbeheren/:id", component: LijstenbeherenComponent},
  {path: "navbar", component: NavbarComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    InloggenComponent,
    RegistrerenComponent,
    NieuweLijstComponent,
    StemmenComponent,
    LijstenbeherenComponent,
    DashboardComponent,
    NieuweItemComponent,
    StemComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
