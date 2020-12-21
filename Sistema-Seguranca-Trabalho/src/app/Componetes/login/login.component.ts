import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicos/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  email: string = "";
  senha: string = "";

  ngOnInit(): void {
  }
  teste(){
    this.authService.mostrarTeste();
  }

}
