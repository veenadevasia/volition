import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjeansComponent } from './viewjeans.component';

describe('ViewjeansComponent', () => {
  let component: ViewjeansComponent;
  let fixture: ComponentFixture<ViewjeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewjeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewjeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
