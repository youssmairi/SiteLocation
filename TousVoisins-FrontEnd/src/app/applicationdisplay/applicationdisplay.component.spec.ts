import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationdisplayComponent } from './applicationdisplay.component';

describe('ApplicationdisplayComponent', () => {
  let component: ApplicationdisplayComponent;
  let fixture: ComponentFixture<ApplicationdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
