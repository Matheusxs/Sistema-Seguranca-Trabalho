import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Jogo } from 'src/app/Models/Jogo';
import { AuthService } from 'src/app/Servicos/auth/auth.service';
import { JogosService } from 'src/app/Servicos/jogos/jogos.service';

@Component({
  selector: 'app-visualizacao-jogo-memoria',
  templateUrl: './visualizacao-jogo-memoria.component.html',
  styleUrls: ['./visualizacao-jogo-memoria.component.css']
})
export class VisualizacaoJogoMemoriaComponent implements OnInit {

  jogo: Jogo = new Jogo("", 0, 0, 0, 0, false, [], 0);
  jogadores: any[] = [];
  jogos: any = [];

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private jogoService: JogosService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.config.data);
    if(this.config.data){
      this.jogo = this.config.data.jogo;
      this.jogadores = this.jogo.getJogadores();
    }else{
      console.log("Não foi possível carregar o jogo");
      this.jogoService.getJogosDeUmUsuario(this.authService.userData.uid).subscribe(jogos => {
        this.jogos = jogos;
        console.log("jogos: ", this.jogos);
      });
    }
  }

  public iniciar(){
    this.ref.close();
  }
}
