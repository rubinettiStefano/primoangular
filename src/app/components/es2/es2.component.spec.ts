import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Es2Component } from './es2.component';

describe('Es2Component', () => {
  let component: Es2Component;
  let fixture: ComponentFixture<Es2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Es2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
