import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/Models/Carta';
import { timer } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { FimJogoMemoriaComponent } from '../fim-jogo-memoria/fim-jogo-memoria.component';
import { IniciarJogoMemoriaComponent } from '../iniciar-jogo-memoria/iniciar-jogo-memoria.component';
import { AuthService } from 'src/app/Servicos/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JogosService } from 'src/app/Servicos/jogos/jogos.service';
import { ConfigurarJogoMemoriaComponent } from '../configurar-jogo-memoria/configurar-jogo-memoria.component';


@Component({
  selector: 'app-jogo-memoria',
  templateUrl: './jogo-memoria.component.html',
  styleUrls: ['./jogo-memoria.component.css'],
  providers: [DialogService]
})
export class JogoMemoriaComponent implements OnInit {

  constructor(public dialogService: DialogService, public authService: AuthService, private router: Router, private arouter: ActivatedRoute, private jogoService: JogosService) { 
  }

  refJanela: any = null;

  cartas: Carta[] = [];
  cartasSelecionadas: number[] = [];

  tempoMaximo: number = 260;

  timerString: string = "";
  timerSegundos: number = 0;
  
  inicioJogo: boolean = false;
  fimDeJogo: boolean = false;
  
  userReady = false;
  jogador = {
    nome: "",
    pontuacao: 0,
    tempo: 0
  }
  pontosPorAcerto = 1000;
  dificuldade = 1;

  ngOnInit(): void {
    this.arouter.queryParamMap
    .subscribe((params) => {
      this.jogoService.getJogo(String(params.get("id"))).subscribe((jogo: any) =>{
        if(jogo){
          this.timerSegundos = jogo.tempo;
          console.log(jogo);
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
        nome: this.authService.userData.displayName,
        pontuacao: 0,
        tempo: 0
      }
      time2.unsubscribe();
    }
  });
   
    for (let index = 0; index < 16; index++) {
      this.cartas.push(new Carta(this.cartas));
    }

    this.cartas = this.shuffle(this.cartas);

    this.timerSegundos = this.tempoMaximo;
    
    this.mostrarIniciar();
    this.executarCronometro();
  
  }

  public selecionarCarta(carta: Carta){
    if (this.cartasSelecionadas.length<2 && this.cartasSelecionadas.indexOf(this.cartas.indexOf(carta)) == -1) {
      this.cartasSelecionadas.push(this.cartas.indexOf(carta));
      carta.isSelecionada = true;
      if (this.cartasSelecionadas.length == 2) {
        if (this.checarPar()) {
          this.cartas[this.cartasSelecionadas[0]].isCorreto = true;
          this.cartas[this.cartasSelecionadas[1]].isCorreto = true;
          this.jogador.pontuacao+= Math.max(this.pontosPorAcerto,100);
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
        if (this.timerSegundos%( Math.ceil(30/this.dificuldade))==0) {
          this.pontosPorAcerto -= Math.ceil(50*this.dificuldade);
        }
      }
      

      this.timerString = this.formatarTempo(this.timerSegundos);

      if(this.timerSegundos == 0){
        this.fimDeJogo = true;
        this.jogador.tempo= this.timerSegundos;
        this.mostraResultado();
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
        tempo: this.formatarTempo(this.tempoMaximo - this.timerSegundos)
      },
    });
    this.refJanela = ref;
  }
  private mostrarIniciar() {
    const ref = this.dialogService.open(IniciarJogoMemoriaComponent, {
      header: '',
      closable: true
    });
    this.refJanela = ref;

    ref.onClose.subscribe(() =>{
      this.inicioJogo = true;
    })
  }
}
