import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarJogoMemoriaComponent } from './configurar-jogo-memoria.component';

describe('ConfigurarJogoMemoriaComponent', () => {
  let component: ConfigurarJogoMemoriaComponent;
  let fixture: ComponentFixture<ConfigurarJogoMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurarJogoMemoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarJogoMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
