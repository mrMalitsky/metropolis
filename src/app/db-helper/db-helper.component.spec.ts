import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbHelperComponent } from './db-helper.component';

describe('DbHelperComponent', () => {
  let component: DbHelperComponent;
  let fixture: ComponentFixture<DbHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
