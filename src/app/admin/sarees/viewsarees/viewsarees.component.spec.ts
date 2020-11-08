import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsareesComponent } from './viewsarees.component';

describe('ViewsareesComponent', () => {
  let component: ViewsareesComponent;
  let fixture: ComponentFixture<ViewsareesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsareesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsareesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
