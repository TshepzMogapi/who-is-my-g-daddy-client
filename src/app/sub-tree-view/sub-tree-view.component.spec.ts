import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTreeViewComponent } from './sub-tree-view.component';

describe('SubTreeViewComponent', () => {
  let component: SubTreeViewComponent;
  let fixture: ComponentFixture<SubTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
