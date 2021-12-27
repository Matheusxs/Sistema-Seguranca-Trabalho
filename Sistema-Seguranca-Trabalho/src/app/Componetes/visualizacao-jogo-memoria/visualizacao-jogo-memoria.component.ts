import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Jogo } from 'src/app/Models/Jogo';

@Component({
  selector: 'app-visualizacao-jogo-memoria',
  templateUrl: './visualizacao-jogo-memoria.component.html',
  styleUrls: ['./visualizacao-jogo-memoria.component.css']
})
export class VisualizacaoJogoMemoriaComponent implements OnInit {

  jogo: Jogo = new Jogo("", 0, 0, 0, 0, false);
  jogadores: any[] = [];

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.jogo = this.config.data.jogo;
    this.jogadores = this.jogo.getJogadores();
    console.log(this.jogadores);
  }

  public iniciar(){
    this.ref.close();
  }
}
