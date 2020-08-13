import { Item } from './../models/item.model';
import { Stem } from './../models/stem.model';

import { Lijst } from './../models/lijst.model';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LijstService {
  baseUrl = environment.baseUrl
  constructor(private http:HttpClient) { }

  getLijstenbyGebruikerId(id){
    return this.http.get<Lijst[]>(this.baseUrl + "lijst/GetLijstenByGebruiker/" + id);
  }
  getStemmenByGebruiker(id){
    return this.http.get<Stem[]>(this.baseUrl + "stem/GetStemmenByGebruiker/"+ id)
  }
  getLijstById(id: number): Observable<any>{
    return this.http.get<any>(this.baseUrl + "lijst/"+ id)
  }
  getActieveLijsten(): Observable<any>{
    return this.http.get<any>(this.baseUrl + "lijst/GetActieveLijsten")
  }
  ToevoegenItem(item: Item){
    return this.http.post<Item>(this.baseUrl + "item", item)
  }
  toevoegenStem(stem : Stem){
    return this.http.post<Stem>(this.baseUrl + "stem", stem)
  }
  putLijst(id, lijst: Lijst):Observable<Lijst> {
    return this.http.put<Lijst>(this.baseUrl + "lijst/" + id, lijst)
  }
  getLijstGestemmed(id: number): Observable<any>{
    return this.http.get<any>(this.baseUrl+ "lijst/getLijstGestemmed/"+id)
  }
  putStem(id, stem: Stem):Observable<Stem> {
    return this.http.put<Stem>(this.baseUrl + "stem/" + id, stem)
  }
}
