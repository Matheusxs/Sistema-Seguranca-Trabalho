import { Component, Input, OnInit } from '@angular/core';
import { Carta } from 'src/app/Models/Carta';
import { Output, EventEmitter } from '@angular/core'; 
import { timer } from 'rxjs';
import { CartaService } from 'src/app/Servicos/carta/carta.service';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {

  constructor(
    private cartasService: CartaService
  ) { }


  @Input() quantidadeTotal: number = 0;
  cartas: Carta[] = [];
  cartasSelecionadas: Carta[] = [];
  timerCheckInvalidCartas: any;

  ngOnInit(): void {
    this.cartas = this.cartasService.getCartasLista();

    this.timerCheckInvalidCartas = timer(200, 1000).subscribe(()=> {
      if(this.cartasSelecionadas.length > (this.quantidadeTotal/2)){
        this.ajustarCartas();
      }
    });
  }

  ngOnDestroy(): void {
    this.timerCheckInvalidCartas.unsubscribe();
  }

  adicionarSelecionada(carta: Carta){
    if(this.cartasSelecionadas.length < (this.quantidadeTotal/2)){
      this.cartasSelecionadas.push(carta);
      this.cartas = this.cartas.filter(c => c.conteudo != carta.conteudo);
    }
  }

  removerSelecionada(carta: Carta){
    this.cartas.push(carta);
    this.cartasSelecionadas = this.cartasSelecionadas.filter(c => c.conteudo != carta.conteudo);
  }

  ajustarCartas(){
    for(let i = 0; i < Math.abs((this.quantidadeTotal/2) - this.cartasSelecionadas.length); i++){
      this.cartas.push(this.cartasSelecionadas.pop()!);
    }
  }
}
