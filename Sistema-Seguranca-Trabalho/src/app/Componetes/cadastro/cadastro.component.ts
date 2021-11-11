import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicos/auth/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(public authService: AuthService) { }
  nome: string = "";
  email: string = "";

  senha: string = "";
  re_senha: string = "";

  ngOnInit(): void {
  }
  cadastrar(){
    if(this.senha == this.re_senha){
      this.authService.SignUp(this.email, this.senha, this.nome);
    }
  }
}
