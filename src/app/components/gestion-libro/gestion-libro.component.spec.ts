import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLibroComponent } from './gestion-libro.component';

describe('GestionLibroComponent', () => {
  let component: GestionLibroComponent;
  let fixture: ComponentFixture<GestionLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
