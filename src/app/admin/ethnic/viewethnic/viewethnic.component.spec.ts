import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewethnicComponent } from './viewethnic.component';

describe('ViewethnicComponent', () => {
  let component: ViewethnicComponent;
  let fixture: ComponentFixture<ViewethnicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewethnicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewethnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
