import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Jogo } from 'src/app/Models/Jogo';

@Component({
  selector: 'app-iniciar-jogo-memoria',
  templateUrl: './iniciar-jogo-memoria.component.html',
  styleUrls: ['./iniciar-jogo-memoria.component.css']
})
export class IniciarJogoMemoriaComponent implements OnInit {

  jogo: Jogo = new Jogo("", 0, 0, 0, 0, false);

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.jogo = this.config.data.jogo;
  }

  public iniciar(){
    this.ref.close();
  }

  public formatarTempo(tempo: number){
    let tempoFormatado = "";
    let minutos = Math.floor(tempo /60);
    let segundos = (tempo - Math.floor(tempo /60)*60);
    if(minutos < 10) tempoFormatado += "0"+minutos;
    else tempoFormatado += minutos;
    tempoFormatado += ":";
    if(segundos < 10) tempoFormatado += "0"+segundos;
    else  tempoFormatado += segundos;

    return tempoFormatado;
  }
}
