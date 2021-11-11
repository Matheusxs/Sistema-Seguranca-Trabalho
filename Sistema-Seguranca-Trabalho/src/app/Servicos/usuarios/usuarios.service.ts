import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { timer } from 'rxjs';
import { AlunosService } from '../alunos/alunos.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuario: any;

  constructor(public afs: AngularFirestore, public authService: AuthService, private alunosService: AlunosService) {
    let time = timer(200, 1000).subscribe(() =>{
      this.usuario = authService.userData;
      if(this.usuario != undefined){
        time.unsubscribe();
      }
    });
   }

  public criarUsuario(){
   // let usuarioRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${this.usuario.uid}`);
   let usuarioRef: AngularFirestoreDocument<any> = this.afs.collection('Users').doc(this.usuario.uid);
    
    usuarioRef.get().subscribe(valor =>{
      this.alunosService.criarAluno(valor.data());
    });
  }
}

