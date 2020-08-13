import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LijstenbeherenComponent } from './lijstenbeheren.component';

describe('LijstenbeherenComponent', () => {
  let component: LijstenbeherenComponent;
  let fixture: ComponentFixture<LijstenbeherenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LijstenbeherenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LijstenbeherenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
