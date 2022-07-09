import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  jogo: Jogo = new Jogo("", "", 0, 0, 0, 0, false, [], 0);
  jogadores: any[] = [];
  jogos: any = [];
  jogos_criados: any = [];
  jogador_id: string = "";
  baseURL = window.location.origin;

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private jogoService: JogosService,
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.isReady().subscribe(() => {
      if(this.authService.userData){
        this.jogador_id = this.authService.userData.uid;
      }
    });
  }

  ngOnInit(): void {
    console.log(this.config.data);
    if(this.config.data){
      this.jogo = this.config.data.jogo;
      this.jogadores = this.jogo.getJogadores();
    }else{
      console.log("Não foi possível carregar o jogo");
      this.jogoService.getJogosDeUmUsuario(this.jogador_id).subscribe(jogos => {
        this.jogos = jogos;
        console.log("jogos: ", this.jogos);
      });
      this.jogoService.getJogosCriadosPorUmUsuario(this.jogador_id).subscribe(jogos => {
        this.jogos_criados = jogos;
        console.log("jogos_criados: ", this.jogos_criados);
      });
    }
  }

  public iniciar(){
    this.ref.close();
  }

  copiarLink(jogo: Jogo){
    const val = this.baseURL + '/jogo-memoria?id=' + jogo.getId();
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  copiarLinkVisualizar(jogo: Jogo){
    const val = this.baseURL + '/jogo-memoria?id=' + jogo.getId() + '&list=' + jogo.getIdVisualizar();
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  acessarLink(jogo: Jogo){
    this.ref.close();
    this.router.navigate(['/jogo-memoria'], { queryParams: { id: jogo.getId() } });
  }

  acessarLinkVisualizar(jogo: Jogo){
    this.ref.close();
    this.router.navigate(['/jogo-memoria'], { queryParams: { id: jogo.getId(), list: jogo.getIdVisualizar() } });
  }
}
