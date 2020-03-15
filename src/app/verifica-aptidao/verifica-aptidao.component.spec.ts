import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaAptidaoComponent } from './verifica-aptidao.component';

describe('VerificaAptidaoComponent', () => {
  let component: VerificaAptidaoComponent;
  let fixture: ComponentFixture<VerificaAptidaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificaAptidaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificaAptidaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
