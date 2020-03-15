import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizaExameAptidaoComponent } from './realiza-exame-aptidao.component';

describe('RealizaExameAptidaoComponent', () => {
  let component: RealizaExameAptidaoComponent;
  let fixture: ComponentFixture<RealizaExameAptidaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizaExameAptidaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizaExameAptidaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
