import { Router } from '@angular/router';
import { GebruikersServiceService } from 'src/app/services/gebruikers-service.service';
import { Lijst } from './../../models/lijst.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nieuwe-lijst',
  templateUrl: './nieuwe-lijst.component.html',
  styleUrls: ['./nieuwe-lijst.component.css']
})
export class NieuweLijstComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private gebruikersService: GebruikersServiceService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  lijstToevoegenForm = this.fb.group({
    naam: new FormControl ('', Validators.required),
    beschrijving: new FormControl('', Validators.required),
    startDatum: new FormControl('', Validators.required),
    eindDatum : new FormControl('', Validators.required)
  })
  
  lijstToevoegen(){
    let naam = this.lijstToevoegenForm.value.naam;
    let beschrijving = this.lijstToevoegenForm.value.beschrijving;
    let startDatum = this.lijstToevoegenForm.value.startDatum;
    let eindDatum = this.lijstToevoegenForm.value.eindDatum;
    let lijst = new Lijst(0,1,naam, beschrijving,startDatum,eindDatum);
    console.log(lijst);
    this.gebruikersService.toevoegenLijst(lijst).subscribe(result=> {
      this.router.navigate(['itemToevoegen/'+result.lijstID]);
    });
    
  }

}
