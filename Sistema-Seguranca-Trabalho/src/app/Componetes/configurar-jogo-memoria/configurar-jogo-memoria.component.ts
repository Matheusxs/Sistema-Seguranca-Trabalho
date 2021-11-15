import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/Models/Jogo';
import { JogosService } from 'src/app/Servicos/jogos/jogos.service';

@Component({
  selector: 'app-configurar-jogo-memoria',
  templateUrl: './configurar-jogo-memoria.component.html',
  styleUrls: ['./configurar-jogo-memoria.component.css']
})
export class ConfigurarJogoMemoriaComponent implements OnInit {

  editMode = false;
  titleText = 'Criar Jogo da Memória';
  buttonText = 'Criar';
  tempo = 200;
  titulo = '';

  viewJogo = false;
  loading = false;
  idJogo = '';
  baseURL = window.location.origin;

  constructor(private jogosService: JogosService) { }

  ngOnInit(): void {
    if(this.editMode){
      this.titleText = 'Editar Jogo da Memória';
      this.buttonText = 'Editar';
    }
  }

  ativar(){
    if(this.editMode){
      this.editar();
    }else{
      this.criar();
    }
  }

  criar(){
    this.viewJogo = true;
    this.loading = true;
    this.jogosService.criarJogo(new Jogo(this.titulo, this.tempo, [])).subscribe((observer: any) => {
      console.log(observer);
      this.loading = false;
      this.idJogo = observer;
    });
  }

  editar(){
  }

  copiarLink(){
    const val = this.baseURL + '/jogo-memoria?id=' + this.idJogo;
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
}
