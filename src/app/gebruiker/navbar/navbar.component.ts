import { ActivatedRoute, Router } from '@angular/router';
import { GebruikersServiceService } from 'src/app/services/gebruikers-service.service';
import { LijstService } from './../../services/lijst.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private gebruiikersservice: GebruikersServiceService,
    private router: Router,
    private route: ActivatedRoute,) {
    gebruiikersservice.isLoggedin.subscribe(result => {
      if (result == true) {
        this.ingelogged = true;
      }
      else {
        this.ingelogged = false;
      }
    })
  }
  id
  ingelogged;
  ngOnInit(): void {
    if(localStorage.getItem("user")) {
      this.gebruiikersservice.isLoggedin.next(true);
    }
  }
  uitloggen() {
    localStorage.removeItem('user');
    sessionStorage.clear();
    this.gebruiikersservice.isLoggedin.next(false);
    this.router.navigate(['login'], { replaceUrl: true });
  }


}
