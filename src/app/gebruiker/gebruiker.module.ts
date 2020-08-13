import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InloggenComponent } from './inloggen/inloggen.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrerenComponent } from './registreren/registreren.component';
import { LijstenbeherenComponent } from './lijstenbeheren/lijstenbeheren.component';
import { StemmenComponent } from './stemmen/stemmen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NieuweLijstComponent } from './nieuwe-lijst/nieuwe-lijst.component';
import { NieuweItemComponent } from './nieuwe-item/nieuwe-item.component';
import { StemComponent } from './stem/stem.component';
import { NavbarComponent } from './navbar/navbar.component'



@NgModule({
  declarations: [InloggenComponent, RegistrerenComponent, LijstenbeherenComponent, StemmenComponent, DashboardComponent, NieuweLijstComponent, NieuweItemComponent, StemComponent, NavbarComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
  ],
  exports:[ ReactiveFormsModule,
  ]
})
export class GebruikerModule { }
