import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Jogo } from 'src/app/Models/Jogo';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  constructor(public afs: AngularFirestore) {

  }
  public getJogo(id:string){
    return new Observable(observer =>{
      const jogoRef: AngularFirestoreDocument<any> = this.afs.doc(`Jogos/${id}`);
      jogoRef.get().subscribe(valor =>{
        observer.next(valor.data());
      });
    });
  }

  public getJogosDeUmUsuario(id: string){
    return new Observable(observer =>{
      const jogoRef = this.afs.collection('Jogos').get().subscribe(valor =>{
        console.log("Query Snapshot: ", valor);
        let jogos: any[] = [];
        valor.forEach(function(doc) {
          let jogo: any = doc.data();
          let jogoO: Jogo = new Jogo(
            jogo.title,
            jogo.tempo_inicio,
            jogo.tempo_max,
            jogo.quantidade_tentativas,
            jogo.prioridade_tempo,
            jogo.mostrar_cartas_antes,
            jogo.cartas_seleciodadas,
            jogo.quantidade_cartas);
          jogo.jogadores.forEach((jogador: any) =>{
            if(jogador.id == id){
              jogos.push({
                jogo_nome: jogo.title,
                pontuacao: jogoO.getPontuacao(jogador.tempo, jogador.tentativas)
              });
            }
          });
        });
        observer.next(jogos);
      });
    });
  }

  public criarJogo(jogo: Jogo, id_visualizar: string){
    return new Observable(observer =>{
      this.afs.collection('Jogos').add({
        id_visualizar: id_visualizar,
        title: jogo.getTitulo(),
        tempo_inicio: jogo.getTempoInicio(),
        tempo_max: jogo.getTempoMax(),
        quantidade_tentativas: jogo.getQuantidadeTentativas(),
        prioridade_tempo: jogo.getPrioridadeTempo(),
        mostrar_cartas_antes: jogo.getMostrarCartasAntes(),
        jogadores: jogo.getJogadores(),
        cartas_seleciodadas: jogo.getCartasSelecionada(),
        quantidade_cartas: jogo.getQuantidadeCartas(),
      }).then(function(docRef: any) {
        console.log("Document written with ID: ", docRef.id);
        observer.next(docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    });
  }

  public adicionarJogador(id: string, jogador: any){
    const novoJogador = {
      id: jogador.getId(),
      nome: jogador.getNome(),
      tentativas: jogador.getTentativas(),
      tempo: jogador.getTempo()
    }
    return new Observable(observer =>{
      const jogoRef: AngularFirestoreDocument<any> = this.afs.doc(`Jogos/${id}`);
      // let jogadores: any[] = [];
      // jogoRef.get().subscribe(valor =>{
      //   jogadores = valor.data().jogadores;
      //   jogadores.push(novoJogador);
      //   console.log("Jogadores: ", jogadores);
      // });
      jogoRef.update({
        jogadores: firebase.default.firestore.FieldValue.arrayUnion(novoJogador)
      }).then(function(docRef: any) {
        observer.next("adicionado");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    });
  }

  public jogadorExiste(id: string, jogador_id: any){
    let existe = false;
    return new Observable(observer =>{
      const jogoRef: AngularFirestoreDocument<any> = this.afs.doc(`Jogos/${id}`);
      let jogadores: any[] = [];
      jogoRef.get().subscribe(valor =>{
        jogadores = valor.data().jogadores;
        for(let i = 0; i < jogadores.length; i++){
          if(jogador_id == jogadores[i].id){
            existe = true;
          }
        }
        observer.next(existe);
      });
    });
  }

  public gerarUID(){
    let uid = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < 5; i++){
      uid += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return uid;
  }
}
