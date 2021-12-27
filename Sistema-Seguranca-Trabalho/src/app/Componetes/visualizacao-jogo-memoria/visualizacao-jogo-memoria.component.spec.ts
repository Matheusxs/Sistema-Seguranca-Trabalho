import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoJogoMemoriaComponent } from './visualizacao-jogo-memoria.component';

describe('VisualizacaoJogoMemoriaComponent', () => {
  let component: VisualizacaoJogoMemoriaComponent;
  let fixture: ComponentFixture<VisualizacaoJogoMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacaoJogoMemoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacaoJogoMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
