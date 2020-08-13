import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { GebruikerInloggen } from 'src/app/models/gebruiker-inloggen.model';
import { GebruikersServiceService } from 'src/app/services/gebruikers-service.service';

@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.css']
})
export class InloggenComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private gebruikersService: GebruikersServiceService,
    private router: Router,) { 

  }
  inloggenForm = this.fb.group({
    email: new FormControl('', Validators.required),
    wachtwoord: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }

  inloggenSubmit(){
    let email = this.inloggenForm.value.email;
    let wachtwoord = this.inloggenForm.value.wachtwoord;
    let gebruikerInloggen = new GebruikerInloggen(email, wachtwoord);
    this.gebruikersService.authenticate(gebruikerInloggen).subscribe(data=>{
      localStorage.setItem("user", data.gebruikerID.toString())
    })

    this.router.navigate(['dashboard'], { replaceUrl: true })
    

  }
}
