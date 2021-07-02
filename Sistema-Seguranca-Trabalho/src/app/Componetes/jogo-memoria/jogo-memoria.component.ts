import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/Models/Carta';
import { timer } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { FimJogoMemoriaComponent } from '../fim-jogo-memoria/fim-jogo-memoria.component';


@Component({
  selector: 'app-jogo-memoria',
  templateUrl: './jogo-memoria.component.html',
  styleUrls: ['./jogo-memoria.component.css'],
  providers: [DialogService]
})
export class JogoMemoriaComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  cartas: Carta[] = [];
  cartasSelecionadas: number[] = [];

  timerString: string = "";
  timerSegundos: number = 0;
  timerMinutos: number = 0;
  
  fimDeJogo: boolean = false;

  ngOnInit(): void {
    for (let index = 0; index < 16; index++) {
      this.cartas.push(new Carta(this.cartas));
    }

    this.cartas = this.shuffle(this.cartas);
    
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
          this.resertarCartasSelecionadas();
          if (this.checarFimDeJogo()) {
            this.fimDeJogo = true;
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
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
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
      this.timerSegundos++;

      if (this.timerSegundos == 60) {
        this.timerSegundos = 0;
        this.timerMinutos++;
      }
      this.timerString = "";
      if (this.timerMinutos < 10) {
        this.timerString += "0" + this.timerMinutos;
      }else{
        this.timerString += "" + this.timerMinutos;
      }

      this.timerString += ":";

      if (this.timerSegundos < 10) {
        this.timerString += "0" + this.timerSegundos;
      }else{
        this.timerString += "" + this.timerSegundos;
      }
    });
  }
  
  private mostraResultado() {
    const ref = this.dialogService.open(FimJogoMemoriaComponent, {
      header: '',
      width: '70%',
      closable: false,
      data: {
        tempo: this.timerString
      },
    });
  }
}
