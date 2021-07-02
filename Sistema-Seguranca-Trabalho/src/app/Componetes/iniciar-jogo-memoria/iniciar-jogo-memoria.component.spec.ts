import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarJogoMemoriaComponent } from './iniciar-jogo-memoria.component';

describe('IniciarJogoMemoriaComponent', () => {
  let component: IniciarJogoMemoriaComponent;
  let fixture: ComponentFixture<IniciarJogoMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarJogoMemoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarJogoMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
