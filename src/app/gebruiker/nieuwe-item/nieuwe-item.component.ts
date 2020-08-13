import { Item } from './../../models/item.model';
import { LijstService } from './../../services/lijst.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieuwe-item',
  templateUrl: './nieuwe-item.component.html',
  styleUrls: ['./nieuwe-item.component.css']
})
export class NieuweItemComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private _lijstService: LijstService,
    private router: Router,
    private route: ActivatedRoute,) { }
    lijstID;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lijstID = params.get('id');
    })
  }
  itemToevoegenForm = this.fb.group({
    naam: new FormControl ('', Validators.required),
    beschrijving: new FormControl('', Validators.required),
  })

  itemToevoegen(){
    let naam = this.itemToevoegenForm.value.naam;
    let beschrijving = this.itemToevoegenForm.value.beschrijving;
    let item = new Item(0,this.lijstID,naam, beschrijving);
    this._lijstService.ToevoegenItem(item).subscribe(result => {
      window.location.reload();
    });
  }
}
