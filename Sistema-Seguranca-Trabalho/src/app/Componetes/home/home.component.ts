import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfigurarJogoMemoriaComponent } from '../configurar-jogo-memoria/configurar-jogo-memoria.component';
import { VisualizacaoJogoMemoriaComponent } from '../visualizacao-jogo-memoria/visualizacao-jogo-memoria.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DialogService]
})
export class HomeComponent{

  constructor(
    public dialogService: DialogService
  ) {}

  public criarJogo() {
    const ref = this.dialogService.open(ConfigurarJogoMemoriaComponent, {
      header: '',
      width: '70%',
      closable: true,
    });
  }

  public mostraJogos() {
    const ref = this.dialogService.open(VisualizacaoJogoMemoriaComponent, {
      header: '',
      width: '50%',
      closable: true,
    });
  }
}
