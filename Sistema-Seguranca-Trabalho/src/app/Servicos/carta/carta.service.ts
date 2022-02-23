import { Injectable } from '@angular/core';
import { Carta } from 'src/app/Models/Carta';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  cartasNomes: string[] = [
    "Alta Temperatura",
    "Alta Voltagem",
    "Atmosfera Explosiva",
    "Campo Eletromagnetico",
    "Forte Campo Magnético",
    "Material Radioativo",
    "Raio Laser",
    "Substâncias Comburante",
    "Substâncias Explosivas",
    "Substâncias Toxicas",
    "Veiculo de Movimenta Carga",
    "Carga suspensa",
    "Perigo de tropeçamento",
    "Risco biológico",
    "Risco de queda em desnivelamento",
    "Substância nociva",
    "Substâncias corrosivas",
    "Temperatura baixa",
    "Vários perigos"
  ];

  constructor() { }

  public getCartaPair(nome: string): any{
    let cartas: Carta[] = [];

    let carta: Carta = new Carta();
    carta.conteudo = nome;
    carta.tipo = "texto";
    let index: string = this.cartasNomes.indexOf(nome)+"";
    carta.id = index;
    cartas.push(carta);

    carta = new Carta();
    carta.id = index;
    const indexSrc = ((parseInt(index)+1)+"");
    if(indexSrc.length == 1){
      index = "00"+(parseInt(index)+1);
    }else if(indexSrc.length == 2){
      index = "0"+(parseInt(index)+1);
    }
    carta.conteudo = "/assets/Placas/"+index+".jpg";
    carta.tipo = "imagem";
    cartas.push(carta);

    return cartas;
  }

  public getRandomCartaPair(): any{
    let cartas: Carta[] = [];
    let cartaIndex: number = this.getRandomInt(0, this.cartasNomes.length);
    
    let carta: Carta = new Carta();
    carta.conteudo = this.cartasNomes[cartaIndex];
    carta.tipo = "texto";
    let index: string = cartaIndex+"";
    carta.id = index;
    cartas.push(carta);

    carta = new Carta();
    carta.id = index;
    const indexSrc = ((parseInt(index)+1)+"");
    if(indexSrc.length == 1){
      index = "00"+(parseInt(index)+1);
    }
    else if(indexSrc.length == 2){
      index = "0"+(parseInt(index)+1);
    }
    carta.conteudo = "/assets/Placas/"+index+".jpg";
    carta.tipo = "imagem";
    cartas.push(carta);

    return cartas;
  }

  public getCartasLista(){

    let cartasLista: Carta[] = [];

    for (let i = 0; i < 19; i++) {
        let carta = new Carta();
        carta.tipo = "texto";
        carta.conteudo = this.cartasNomes[i];
        cartasLista.push(carta);
    }

    return cartasLista;
  }

  private getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
