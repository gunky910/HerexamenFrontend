import { Gebruiker } from './../../models/gebruiker.model';
import { GebruikersServiceService } from 'src/app/services/gebruikers-service.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.css']
})
export class RegistrerenComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private gebruikersService: GebruikersServiceService,
    private router: Router) { 

  }
  registratieForm = this.fb.group({
    email: new FormControl('', Validators.required),
    wachtwoord: new FormControl('', Validators.required),
    wachtwoord2: new FormControl('', Validators.required),
    gebruikersnaam: new FormControl('', Validators.required)
  },
  {
    validator:this.wachtwoordcontrole
  }
  )

  ngOnInit(): void {
  }

  registratieSubmit(){
    let email = this.registratieForm.value.email;
    let gebruikersnaam = this.registratieForm.value.gebruikersnaam;
    let wachtwoord = this.registratieForm.value.wachtwoord;
    let gebruiker = new Gebruiker(0, email,wachtwoord,gebruikersnaam)
    this.gebruikersService.toevoegenGebruiker(gebruiker).subscribe();
    this.router.navigate(['/login'])
  }
  wachtwoordcontrole(control: AbstractControl){
    let ww = control.get('wachtwoord').value;
    let ww1 = control.get('wachtwoord1').value;
    if (ww != ww1){
      control.get('wachtwoord1').setErrors({MatchPassword: true});
    }else{
      return null;
    }
  }
}
