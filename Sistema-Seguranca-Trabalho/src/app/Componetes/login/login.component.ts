import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicos/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) { }

  email: string = "";
  senha: string = "";

  ngOnInit(): void {
  }
  irParaCadastro(){
    this.router.navigate(["cadastro"]);
  } 
  login(){
    this.authService.SignIn(this.email, this.senha);
  }
}
