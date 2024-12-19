import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Es1Component } from './es1.component';

describe('Es1Component', () => {
  let component: Es1Component;
  let fixture: ComponentFixture<Es1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Es1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
