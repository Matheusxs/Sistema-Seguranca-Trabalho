import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Jogador } from 'src/app/Models/Jogador';
import { Jogo } from 'src/app/Models/Jogo';
import { JogosService } from 'src/app/Servicos/jogos/jogos.service';

@Component({
  selector: 'app-fim-jogo-memoria',
  templateUrl: './fim-jogo-memoria.component.html',
  styleUrls: ['./fim-jogo-memoria.component.css']
})
export class FimJogoMemoriaComponent implements OnInit {

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private router: Router,
    private jogoService: JogosService
    ) { }

  jogador!: Jogador;
  jogo_id: string = "";
  jogo!: Jogo;

  ngOnInit(): void {
    const jogador_id = this.config.data.jogador.id;
    const jogador_nome = this.config.data.jogador.nome;
    const jogador_tentativas = this.config.data.jogador.tentativas;
    const jogador_tempo = this.config.data.jogador.tempo;
    this.jogador = new Jogador(jogador_id, jogador_nome, jogador_tentativas, jogador_tempo);

    this.jogo_id = this.config.data.jogo_id;
    this.jogo = this.config.data.jogo;
    this.persistirDados();
  }

  private persistirDados(){
    this.jogoService.adicionarJogador(this.jogo_id, this.jogador).subscribe((resposta: any) => {
      if(resposta != "adicionado"){
        alert("Erro ao adicionar jogador");
      }
    });
  }

  public concluir(){
    this.router.navigate(['']);
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

  public getPontuacao(){
    return this.jogo.getPontuacao(this.jogador.getTempo(), this.jogador.getTentativas());
  }  
}
