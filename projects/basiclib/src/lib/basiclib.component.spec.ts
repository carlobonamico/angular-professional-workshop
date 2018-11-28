import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiclibComponent } from './basiclib.component';

describe('BasiclibComponent', () => {
  let component: BasiclibComponent;
  let fixture: ComponentFixture<BasiclibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasiclibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasiclibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
