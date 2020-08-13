import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuweItemComponent } from './nieuwe-item.component';

describe('NieuweItemComponent', () => {
  let component: NieuweItemComponent;
  let fixture: ComponentFixture<NieuweItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuweItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuweItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
