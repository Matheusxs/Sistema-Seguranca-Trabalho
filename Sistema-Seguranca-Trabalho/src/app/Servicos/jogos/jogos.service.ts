import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Jogo } from 'src/app/Models/Jogo';

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

  public criarJogo(jogo: Jogo){
    return new Observable(observer =>{
      this.afs.collection('Jogos').add({
        title: jogo.getTitulo(),
        tempo: jogo.getTempo(),
        jogadores: jogo.getJogadores(),
      }).then(function(docRef: any) {
        console.log("Document written with ID: ", docRef.id);
        observer.next(docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    });
  }
}
