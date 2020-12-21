import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  teste: string = ""; 
  constructor() { }
  mostrarTeste(){
    console.log(this.teste);
  }
  criarTeste(teste: string){
    this.teste = teste;    
  }
}
