import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarliestAscendantComponent } from './earliest-ascendant.component';

describe('EarliestAscendantComponent', () => {
  let component: EarliestAscendantComponent;
  let fixture: ComponentFixture<EarliestAscendantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarliestAscendantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarliestAscendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
