import { Stem } from './../../models/stem.model';
import { Lijst } from './../../models/lijst.model';
import { LijstService } from './../../services/lijst.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  constructor(private _lijstService: LijstService) { }
lijsten: Lijst[];
stemmen: Stem[];
lijsten2: Lijst[];
gestemmedLijst: Lijst[];
  ngOnInit(): void {

    let id = localStorage.getItem("user");

    this._lijstService.getLijstGestemmed(parseInt(id)).subscribe(result => {
        this.gestemmedLijst = result;
    })
    this._lijstService.getLijstenbyGebruikerId(id).subscribe((result) =>{
      this.lijsten = result;
      console.log(result);
    })
    this._lijstService.getStemmenByGebruiker(id).subscribe((result) =>{
      this.stemmen = result;
      // this._lijstService.getLijstenByStem(id)

    })
    
    }

}
