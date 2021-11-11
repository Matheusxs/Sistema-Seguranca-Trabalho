import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(public afs: AngularFirestore) { 

  }

  public criarAluno(usuario: any){
    return new Observable(observer =>{
      this.getAlunosRef().add(usuario).then(() =>{
        observer.next('sucesso');
      }).catch(e =>{
        observer.next('erro');
      })
    });
  }

  private getAlunosRef(){
    return this.afs.collection('Alunos');
  }
}
