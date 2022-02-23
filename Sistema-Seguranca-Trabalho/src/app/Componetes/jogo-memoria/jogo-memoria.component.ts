import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/Models/Carta';
import { timer } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { FimJogoMemoriaComponent } from '../fim-jogo-memoria/fim-jogo-memoria.component';
import { IniciarJogoMemoriaComponent } from '../iniciar-jogo-memoria/iniciar-jogo-memoria.component';
import { AuthService } from 'src/app/Servicos/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JogosService } from 'src/app/Servicos/jogos/jogos.service';
import { Jogo } from 'src/app/Models/Jogo';
import { VisualizacaoJogoMemoriaComponent } from '../visualizacao-jogo-memoria/visualizacao-jogo-memoria.component';
import { CartaService } from 'src/app/Servicos/carta/carta.service';


@Component({
  selector: 'app-jogo-memoria',
  templateUrl: './jogo-memoria.component.html',
  styleUrls: ['./jogo-memoria.component.css'],
  providers: [DialogService]
})
export class JogoMemoriaComponent implements OnInit {

  constructor(
    public dialogService: DialogService,
    public authService: AuthService,
    private router: Router,
    private arouter: ActivatedRoute,
    private jogoService: JogosService,
    private cartasService: CartaService
  ){ }

  debug_mode: boolean = false;
  visualizando: boolean = false;

  jogo_id: string = "";

  refJanela: any = null;

  cartas: Carta[] = [];
  cartasSelecionadas: number[] = [];

  jogo!: Jogo; 

  tempoMaximo: number = 260;

  timerString: string = "";
  timerSegundos: number = 0;

  timerMostrarCartasInicio: number = 5;
  
  inicioJogo: boolean = false;
  fimDeJogo: boolean = false;
  
  userReady = false;
  jogador = {
    id: 0,
    nome: "",
    tentativas: 0,
    tempo: 0
  }

  ngOnInit(): void {
    this.arouter.queryParamMap
    .subscribe((params) => {
      this.jogo_id = String(params.get("id"));
      const id_visualizar = String(params.get("list"));
      this.jogoService.getJogo(this.jogo_id).subscribe((jogo: any) =>{
        if(jogo){
          this.tempoMaximo = jogo.tempo_max;
          this.timerSegundos = this.tempoMaximo;
          this.jogo = new Jogo(
            jogo.title,
            jogo.tempo_inicio,
            jogo.tempo_max,
            jogo.quantidade_tentativas,
            jogo.prioridade_tempo,
            jogo.mostrar_cartas_antes,
            jogo.cartas_seleciodadas,
            jogo.quantidade_cartas
          );
          this.jogo.setJogadores(jogo.jogadores);
          this.inicializarCartas();
          if(id_visualizar == jogo.id_visualizar){
            this.visualizando = true;
            this.mostrarVisualizacao();
          }else{
            this.mostrarIniciar();
          }
        }else{
          console.error("Jogo não encontrado");
          // this.router.navigate(['/']);
          // if(this.refJanela){
          //   this.refJanela.close();
          // }
        }
      })
    }
  );
  let time = timer(200, 1000).subscribe(() =>{
    if(this.authService.userData != undefined){
      this.userReady = true;
      time.unsubscribe();
    }
  });
  let time2 = timer(200, 1000).subscribe(() =>{
    if(this.userReady){
      this.jogador = {
        id: this.authService.userData.uid,
        nome: this.authService.userData.displayName,
        tentativas: 0,
        tempo: 0
      }
      this.jogoService.jogadorExiste(this.jogo_id, this.jogador.id).subscribe((existe: any) =>{
        if(existe && !this.visualizando){
          if(this.refJanela){
            this.refJanela.close();
          }
          alert("Você já participou deste jogo!");
          this.router.navigate(['']);
        }
      });
      time2.unsubscribe();
    }
  });

    this.timerSegundos = this.tempoMaximo;
  }

  private inicializarCartas(){
    console.log(this.jogo.getCartasSelecionada());
    if(this.jogo.getCartasSelecionada().length != 0){
      for(let i = 0; i < this.jogo.getCartasSelecionada().length; i++){
        this.cartas = this.cartas.concat(this.cartasService.getCartaPair(this.jogo.getCartasSelecionada()[i]));
      }
      if(this.cartas.length != this.jogo.getQuantidadeCartas()){
        const quantidade_restante = this.jogo.getQuantidadeCartas() - this.cartas.length;
        for (let index = 0; index < quantidade_restante/2; index++) {
          do{
            let cartas = this.cartasService.getRandomCartaPair();
            let valido = true;
            this.cartas.forEach((carta) => {
              if(carta.id == cartas[0].id){
                valido = false;
              }
            });
            if(valido){
              this.cartas = this.cartas.concat(cartas);
              break;
            }
          }while(true);
        }
      }
    }else{
      for (let index = 0; index < this.jogo.getQuantidadeCartas()/2; index++) {
        do{
          let cartas = this.cartasService.getRandomCartaPair();
          let valido = true;
          this.cartas.forEach((carta) => {
            if(carta.id == cartas[0].id){
              valido = false;
            }
          });
          if(valido){
            this.cartas = this.cartas.concat(cartas);
            break;
          }
        }while(true);
      }
    }

    this.cartas = this.shuffle(this.cartas);
  }

  private mostrarCartas(tempo: number){
    this.timerSegundos = tempo;
    this.virarCartas("cima");
    this.executarCronometroExibirCartas();
  }

  private virarCartas(lado: string){
    switch (lado) {
      case "cima":
        for (let i = 0; i < this.cartas.length; i++) {
          this.cartas[i].isSelecionada = true;
        }
        break;
      case "baixo":
        for (let i = 0; i < this.cartas.length; i++) {
          this.cartas[i].isSelecionada = false;
        }
        break;
    }
  }

  public selecionarCarta(carta: Carta){
    if (this.cartasSelecionadas.length<2 && this.cartasSelecionadas.indexOf(this.cartas.indexOf(carta)) == -1) {
      this.cartasSelecionadas.push(this.cartas.indexOf(carta));
      carta.isSelecionada = true;
      if (this.cartasSelecionadas.length == 2) {
        if (this.checarPar()) {
          this.cartas[this.cartasSelecionadas[0]].isCorreto = true;
          this.cartas[this.cartasSelecionadas[1]].isCorreto = true;
          this.resertarCartasSelecionadas();
          if (this.checarFimDeJogo()) {
            this.fimDeJogo = true;
            this.jogador.tempo = this.tempoMaximo - this.timerSegundos;
            this.mostraResultado();
          }
        }else{
          let time = timer(1000, 1000).subscribe(() =>{
            this.desSelecionarCartas();
            this.resertarCartasSelecionadas();
            time.unsubscribe();
          });
        }
        this.jogador.tentativas++;
        if(this.debug_mode){
          this.fimDeJogo = true;
          this.jogador.tempo = this.tempoMaximo - this.timerSegundos;
          this.mostraResultado();
        }
      }
    }
  }

  private checarFimDeJogo(){
    let fimDeJogo = true;
    for (let i = 0; i < this.cartas.length; i++) {
      if (!this.cartas[i].isCorreto) {
        fimDeJogo = false;
      }
    }
    return fimDeJogo;
  }

  private checarPar(){
    if (this.cartas[this.cartasSelecionadas[0]].id == this.cartas[this.cartasSelecionadas[1]].id) {
      return true;
    }else{
      return false;
    }
  }

  private desSelecionarCartas(){
    this.cartas[this.cartasSelecionadas[0]].isSelecionada = false;
    this.cartas[this.cartasSelecionadas[1]].isSelecionada = false;
  }

  private resertarCartasSelecionadas(){
    this.cartasSelecionadas.splice(0,2);
  }

  private shuffle(array: any[]) {
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  private executarCronometro(){

    let timerCronometro = timer(1000,1000).subscribe(() => {
      if (this.fimDeJogo) {
        timerCronometro.unsubscribe();
        return;
      }

      if (this.inicioJogo) {
        this.timerSegundos--;
      }
      

      this.timerString = this.formatarTempo(this.timerSegundos);

      if(this.timerSegundos == 0){
        this.fimDeJogo = true;
        this.jogador.tempo = this.tempoMaximo;
        this.mostraResultado();
      }
    });
  }

  private executarCronometroExibirCartas(){
    let timerCronometro = timer(1000,1000).subscribe(() => {
      if (this.fimDeJogo) {
        timerCronometro.unsubscribe();
        return;
      }

      if (this.inicioJogo) {
        this.timerSegundos--;
      }
      

      this.timerString = this.formatarTempo(this.timerSegundos);

      if(this.timerSegundos == 0){
        this.tempoMaximo = this.jogo.getTempoMax();
        this.timerSegundos = this.tempoMaximo;
        this.inicioJogo = true;
        timerCronometro.unsubscribe();
        this.executarCronometro();
        this.virarCartas("baixo");
      }
    });
  }

  private formatarTempo(tempo: number){
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
  
  private mostraResultado() {
    const ref = this.dialogService.open(FimJogoMemoriaComponent, {
      header: '',
      width: '70%',
      closable: false,
      data: {
        jogador: this.jogador,
        jogo_id: this.jogo_id,
        jogo: this.jogo
      },
    });
    this.refJanela = ref;
  }
  private mostrarIniciar() {
    const ref = this.dialogService.open(IniciarJogoMemoriaComponent, {
      header: '',
      data: {
        jogo: this.jogo
      }
    });
    this.refJanela = ref;

    ref.onClose.subscribe(() =>{
      if(this.jogo.getMostrarCartasAntes()){
        this.mostrarCartas(this.timerMostrarCartasInicio);
        this.inicioJogo = true;
      }else{
        this.inicioJogo = true;
        this.executarCronometro();
      }
    })
  }

  private mostrarVisualizacao(){
    const ref = this.dialogService.open(VisualizacaoJogoMemoriaComponent, {
      header: '',
      width: '50%',
      data: {
        jogo: this.jogo
      }
    });
    this.refJanela = ref;

    ref.onClose.subscribe(() =>{
      this.router.navigate(['']);
    });
  }
}
