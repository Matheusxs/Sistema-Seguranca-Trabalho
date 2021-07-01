import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/Models/Carta';
import { timer } from 'rxjs';

@Component({
  selector: 'app-jogo-memoria',
  templateUrl: './jogo-memoria.component.html',
  styleUrls: ['./jogo-memoria.component.css']
})
export class JogoMemoriaComponent implements OnInit {

  constructor() { }

  cartas: Carta[] = [];
  cartasSelecionadas: number[] = [];

  ngOnInit(): void {
    for (let index = 0; index < 16; index++) {
      this.cartas.push(new Carta(this.cartas));
    }
    this.cartas = this.shuffle(this.cartas);
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
            alert("Fim de Jogo");
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
}
