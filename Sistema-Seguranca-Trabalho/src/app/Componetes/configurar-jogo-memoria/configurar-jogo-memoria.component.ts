import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { Carta } from 'src/app/Models/Carta';
import { Jogo } from 'src/app/Models/Jogo';
import { JogosService } from 'src/app/Servicos/jogos/jogos.service';

@Component({
  selector: 'app-configurar-jogo-memoria',
  templateUrl: './configurar-jogo-memoria.component.html',
  styleUrls: ['./configurar-jogo-memoria.component.css'],
  providers: [MessageService]
})
export class ConfigurarJogoMemoriaComponent implements OnInit {

  @ViewChild('pick_list') pick_list: any;

  editMode = false;
  titleText = 'Criar Jogo da Memória';
  buttonText = 'Criar';
  titulo = '';

  tempo_inicio = 240;
  tempo_max = 310;
  quantidade_tentativas = 24;
  prioridade_tempo = 50;
  mostrar_cartas_antes = false;

  peso_tempo_inicio = 2;
  peso_tempo_max = 4;
  peso_quantidade_tentativas = 3;
  peso_mostrar_cartas_antes = 1;

  quantidade_cartas = 8;

  dificuldade = 0;

  tituloInvalido = false;
  viewJogo = false;
  loading = false;
  idJogo = '';
  id_visualizar = '';
  baseURL = window.location.origin;

  placehooders: any[] = [];
  timerPlaceholders: any;

  constructor(
    private jogosService: JogosService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    if(this.editMode){
      this.titleText = 'Editar Jogo da Memória';
      this.buttonText = 'Editar';
    }
    this.calcularDificuldade();

    this.timerPlaceholders = timer(500, 1500).subscribe(() => {
      this.placehooders = Array(this.quantidade_cartas).fill(0);
    });
  }

  ativar(){
    if(this.editMode){
      this.editar();
    }else{
      this.criar();
    }
  }

  criar(){
    console.log("pick_list", this.getCartasSelecionadas(this.pick_list.cartasSelecionadas));
    if(this.verificarCamposObrigatorios()){
      this.viewJogo = true;
      this.loading = true;
      this.id_visualizar = this.jogosService.gerarUID();
      this.jogosService.criarJogo(
        new Jogo(
          this.titulo,
          this.tempo_inicio,
          this.tempo_max,
          this.quantidade_tentativas,
          this.prioridade_tempo,
          this.mostrar_cartas_antes,
          this.getCartasSelecionadas(this.pick_list.cartasSelecionadas),
          this.quantidade_cartas
          ),
        this.id_visualizar
      ).subscribe((observer: any) => {
        this.loading = false;
        this.idJogo = observer;
      });
    }else{
      this.tituloInvalido = true;
      this.messageService.add({severity:'error', summary:'Erro', detail:'Preencha todos os campos obrigatórios!'});
    }
  }

  editar(){
  }

  getCartasSelecionadas(cartas: Carta[]){
    return cartas.map(carta => carta.conteudo);
  }

  selecionarCartas(pick_list: any){
    console.log(pick_list.cartasSelecionadas)
  }

  verificarCamposObrigatorios(){
    this.titulo = this.titulo.replace(/\s+/g, ' ').trim();
    if(this.titulo == '' || this.titulo == ' '){
      return false;
    }
    return true;
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

  copiarLinkVisualizar(){
    const val = this.baseURL + '/jogo-memoria?id=' + this.idJogo + '&list=' + this.id_visualizar;
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


  mudarTitulo(){
    this.titulo = this.titulo.replace(/\s+/g, ' ').trim();
    if(this.titulo == '' || this.titulo == ' '){
      this.tituloInvalido = true;
    }else{
      this.tituloInvalido = false;
    }
  }

  mudarTempoMax(){
    if(this.tempo_inicio > this.tempo_max){
      this.tempo_inicio = this.tempo_max;
    }
    this.calcularDificuldade();
  }

  mudarQuantidadeTentativas(){
    this.calcularDificuldade();
  }

  mudarTempoInicio(){
    this.calcularDificuldade();
  }

  mudarMostrarCartasAntes(){
    this.calcularDificuldade();
  }

  calcularDificuldade(){

    let dificuldade_tempo_max = (1 - ((this.tempo_max - 20)/580)) * this.peso_tempo_max;
    let dificuldade_tempo_inicio = (1 - (this.tempo_inicio/this.tempo_max)) * this.peso_tempo_inicio;
    let dificuldade_quantidade_tentativas = (1 - ((this.quantidade_tentativas - 1)/49)) * this.peso_quantidade_tentativas;
    let dificuldade_mostrar_cartas_antes;

    if(this.mostrar_cartas_antes){
      dificuldade_mostrar_cartas_antes = 0 * this.peso_mostrar_cartas_antes;
    }else{
      dificuldade_mostrar_cartas_antes = 1 * this.peso_mostrar_cartas_antes;
    }

    let media_dificuldade = (dificuldade_tempo_max + dificuldade_tempo_inicio + dificuldade_quantidade_tentativas + dificuldade_mostrar_cartas_antes)/10;

    this.dificuldade = Math.round(media_dificuldade * 100);
  }

}
