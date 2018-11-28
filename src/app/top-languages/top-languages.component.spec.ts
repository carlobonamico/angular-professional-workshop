import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLanguagesComponent } from './top-languages.component';

describe('TopLanguagesComponent', () => {
  let component: TopLanguagesComponent;
  let fixture: ComponentFixture<TopLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
