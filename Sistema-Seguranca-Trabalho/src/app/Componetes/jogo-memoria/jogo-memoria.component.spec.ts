import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoMemoriaComponent } from './jogo-memoria.component';

describe('JogoMemoriaComponent', () => {
  let component: JogoMemoriaComponent;
  let fixture: ComponentFixture<JogoMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoMemoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
