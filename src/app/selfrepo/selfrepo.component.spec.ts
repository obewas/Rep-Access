import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfrepoComponent } from './selfrepo.component';

describe('SelfrepoComponent', () => {
  let component: SelfrepoComponent;
  let fixture: ComponentFixture<SelfrepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfrepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
