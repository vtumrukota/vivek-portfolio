import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinDialogComponent } from './linkedin-dialog.component';

describe('LinkedinDialogComponent', () => {
  let component: LinkedinDialogComponent;
  let fixture: ComponentFixture<LinkedinDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
