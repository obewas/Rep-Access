import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicrepoComponent } from './publicrepo.component';

describe('PublicrepoComponent', () => {
  let component: PublicrepoComponent;
  let fixture: ComponentFixture<PublicrepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicrepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
