import { Lijst } from './../../models/lijst.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LijstService } from './../../services/lijst.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stemmen',
  templateUrl: './stemmen.component.html',
  styleUrls: ['./stemmen.component.css']
})
export class StemmenComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private _lijstService: LijstService,
    private router: Router,
    private route: ActivatedRoute,) { }

    lijstID;
    lijsten;
    alleLijsten: Lijst[]=[];
    id = localStorage.getItem("user");
  ngOnInit(): void {
    
   this._lijstService.getActieveLijsten().subscribe(result =>{
     this.lijsten = result; this.alleLijsten = this.lijsten;
     
     
   });
    this.route.paramMap.subscribe(params => {
      this.lijstID = params.get('id');
    })
  }
  zoekenForm = this.fb.group({
    zoeken: new FormControl('', Validators.required),
  })
  
  zoeken(){
    let s = this.zoekenForm.value.zoeken;
    s = s.toLowerCase().trim();
    if (s != ""){
      let lijstzoeken: Lijst[] = [];
      this.lijsten.forEach(item => {
      if(item.naam.includes(s) || item.beschrijving.includes(s)){
        lijstzoeken.push(item);
      }
      this.alleLijsten = lijstzoeken;
      });
    } else {
      this.alleLijsten = this.lijsten;
    }
    
  }
}
