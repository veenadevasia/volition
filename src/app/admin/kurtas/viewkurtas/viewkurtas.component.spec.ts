import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewkurtasComponent } from './viewkurtas.component';

describe('ViewkurtasComponent', () => {
  let component: ViewkurtasComponent;
  let fixture: ComponentFixture<ViewkurtasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewkurtasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewkurtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
