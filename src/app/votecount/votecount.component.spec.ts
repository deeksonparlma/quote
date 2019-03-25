import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotecountComponent } from './votecount.component';

describe('VotecountComponent', () => {
  let component: VotecountComponent;
  let fixture: ComponentFixture<VotecountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotecountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
