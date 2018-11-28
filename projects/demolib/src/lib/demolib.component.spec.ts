import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemolibComponent } from './demolib.component';

describe('DemolibComponent', () => {
  let component: DemolibComponent;
  let fixture: ComponentFixture<DemolibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemolibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemolibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
