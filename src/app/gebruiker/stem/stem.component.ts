import { Item } from './../../models/item.model';
import { Stem } from './../../models/stem.model';
import { Lijst } from './../../models/lijst.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LijstService } from './../../services/lijst.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stem',
  templateUrl: './stem.component.html',
  styleUrls: ['./stem.component.css']
})
export class StemComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private _lijstService: LijstService,
    private router: Router,
    private route: ActivatedRoute,) { }
  lijstID;
  lijst: any;
  stem;

  stemForm = this.fb.group({
    stemmen: new FormControl('')
  })
  gestemd = false;
  id;
  stemid;
  ngOnInit(): void {
    this.id = localStorage.getItem("user");
    this.route.paramMap.subscribe(params => {
      this.lijstID = params.get('id');
      this._lijstService.getLijstById(this.lijstID).subscribe(result => {
        this.lijst = result;
        result.items.forEach(i => {
          i.stemmen.forEach(s => {
            if (s.gebruikerID == this.id) {
              this.gestemd = true;
              this.stemid = s.stemID;
            }
          })

        });
      })
    })
  }

  stemToevoegen() {
    let userid = localStorage.getItem("user");
    let itemid: number = Number(this.stemForm.value.stemmen);
    if (this.gestemd == false) {
      let stem = new Stem(0, itemid, parseInt(userid));
      this._lijstService.toevoegenStem(stem).subscribe();
    }
    if (this.gestemd == true) {
      let stem = new Stem(this.stemid, itemid, parseInt(userid))

      this._lijstService.putStem(this.stemid, stem).subscribe();

    }
    this.router.navigate(['/stemmen'])


  }

}
