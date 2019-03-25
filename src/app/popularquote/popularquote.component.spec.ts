import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularquoteComponent } from './popularquote.component';

describe('PopularquoteComponent', () => {
  let component: PopularquoteComponent;
  let fixture: ComponentFixture<PopularquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
