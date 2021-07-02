import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-iniciar-jogo-memoria',
  templateUrl: './iniciar-jogo-memoria.component.html',
  styleUrls: ['./iniciar-jogo-memoria.component.css']
})
export class IniciarJogoMemoriaComponent implements OnInit {

  constructor(public ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }

  public iniciar(){
    this.ref.close();
  }
}
