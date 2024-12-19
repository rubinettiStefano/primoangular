import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananaInScatolaComponent } from './banana-in-scatola.component';

describe('BananaInScatolaComponent', () => {
  let component: BananaInScatolaComponent;
  let fixture: ComponentFixture<BananaInScatolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BananaInScatolaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BananaInScatolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
