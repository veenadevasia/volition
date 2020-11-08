import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbeautyComponent } from './viewbeauty.component';

describe('ViewbeautyComponent', () => {
  let component: ViewbeautyComponent;
  let fixture: ComponentFixture<ViewbeautyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbeautyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
