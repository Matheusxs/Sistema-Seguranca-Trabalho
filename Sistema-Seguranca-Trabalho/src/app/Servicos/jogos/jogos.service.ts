import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
      })  
    })
    
  }
}
