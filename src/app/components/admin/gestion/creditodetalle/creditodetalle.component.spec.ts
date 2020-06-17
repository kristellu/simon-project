import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditodetalleComponent } from './creditodetalle.component';

describe('CreditodetalleComponent', () => {
  let component: CreditodetalleComponent;
  let fixture: ComponentFixture<CreditodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
