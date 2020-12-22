import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicos/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  email: string = "";
  senha: string = "";

  ngOnInit(): void {
  }
  irParaCadastro(){
    this.router.navigate(["cadastro"]);

  }
}
