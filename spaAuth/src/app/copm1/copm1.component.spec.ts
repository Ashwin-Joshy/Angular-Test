import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copm1Component } from './copm1.component';

describe('Copm1Component', () => {
  let component: Copm1Component;
  let fixture: ComponentFixture<Copm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Copm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Copm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
