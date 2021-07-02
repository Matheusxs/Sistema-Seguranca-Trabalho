import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FimJogoMemoriaComponent } from './fim-jogo-memoria.component';

describe('FimJogoMemoriaComponent', () => {
  let component: FimJogoMemoriaComponent;
  let fixture: ComponentFixture<FimJogoMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FimJogoMemoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FimJogoMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
