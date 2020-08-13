import { Lijst } from './../../models/lijst.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LijstService } from './../../services/lijst.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lijstenbeheren',
  templateUrl: './lijstenbeheren.component.html',
  styleUrls: ['./lijstenbeheren.component.css']
})
export class LijstenbeherenComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private _lijstService: LijstService,
    private router: Router,
    private route: ActivatedRoute,) { }

lijstID;
lijst;
lijstUpdateForm = this.fb.group({
  startDatum: new FormControl('', Validators.required),
  eindDatum: new FormControl('', Validators.required),
})

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lijstID = params.get('id');
    })
    this._lijstService.getLijstById(this.lijstID).subscribe(result =>{
    this.lijst = result;

    })
  }

  lijstUpdate(){
    let startDatum = this.lijstUpdateForm.value.startDatum;
    let eindDatum = this.lijstUpdateForm.value.eindDatum;
    let lijst1 = new Lijst(this.lijst.lijstID, this.lijst.gebruikerID, this.lijst.naam, this.lijst.beschrijving, startDatum,eindDatum);
    console.log(lijst1);
    console.log(lijst1);
    console.log(lijst1);
    
    this._lijstService.putLijst(this.lijstID, lijst1).subscribe()
    this.router.navigate(['/dashboard'])
  }

}
