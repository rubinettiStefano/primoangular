import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraPersoneComponent } from './mostra-persone.component';

describe('MostraPersoneComponent', () => {
  let component: MostraPersoneComponent;
  let fixture: ComponentFixture<MostraPersoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostraPersoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostraPersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
