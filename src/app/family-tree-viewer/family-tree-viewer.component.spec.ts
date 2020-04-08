import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyTreeViewerComponent } from './family-tree-viewer.component';

describe('FamilyTreeViewerComponent', () => {
  let component: FamilyTreeViewerComponent;
  let fixture: ComponentFixture<FamilyTreeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyTreeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyTreeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
