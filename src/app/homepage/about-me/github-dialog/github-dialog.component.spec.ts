import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubDialogComponent } from './github-dialog.component';

describe('GithubDialogComponent', () => {
  let component: GithubDialogComponent;
  let fixture: ComponentFixture<GithubDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
