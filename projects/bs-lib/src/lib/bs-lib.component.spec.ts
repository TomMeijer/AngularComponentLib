import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsLibComponent } from './bs-lib.component';

describe('BsLibComponent', () => {
  let component: BsLibComponent;
  let fixture: ComponentFixture<BsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
