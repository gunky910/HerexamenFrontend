import { Lijst } from './../models/lijst.model';

import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { GebruikerInloggen } from '../models/gebruiker-inloggen.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gebruiker } from '../models/gebruiker.model';
@Injectable({
  providedIn: 'root'
})
export class GebruikersServiceService {

  baseUrl = environment.baseUrl
  constructor(private http:HttpClient) {

   }
   authenticate(gebruikerInloggen: GebruikerInloggen): Observable<Gebruiker>{
     return this.http.post<Gebruiker>(this.baseUrl+"gebruiker/authenticate", gebruikerInloggen)
   }
   isLoggedin = new BehaviorSubject(false); 
   toevoegenGebruiker(gebruiker: Gebruiker){
      return this.http.post<Gebruiker>(this.baseUrl+"gebruiker", gebruiker)
   }
   toevoegenLijst(lijst: Lijst){
    return this.http.post<Lijst>(this.baseUrl+"lijst", lijst)
 }

}
