import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicos/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private authService: AuthService) { }
  nome: string = "";
  email: string = "";

  senha: string = "";
  re_senha: string = "";

  ngOnInit(): void {
  }
  teste(){
    this.authService.criarTeste(this.nome);
  }
}
