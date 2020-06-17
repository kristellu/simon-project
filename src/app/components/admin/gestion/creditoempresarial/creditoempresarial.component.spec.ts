import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoempresarialComponent } from './creditoempresarial.component';

describe('CreditoempresarialComponent', () => {
  let component: CreditoempresarialComponent;
  let fixture: ComponentFixture<CreditoempresarialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoempresarialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoempresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
