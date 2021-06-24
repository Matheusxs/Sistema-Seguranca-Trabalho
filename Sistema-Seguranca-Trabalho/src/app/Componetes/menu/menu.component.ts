import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { AuthService } from 'src/app/Servicos/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Área do aluno',
          icon: 'pi pi-user'
      },
      {
          label: 'Informações',
          icon: 'pi pi-book'
      },
      {
        label: 'Turma',
        icon: 'pi pi-users'
      },
      {
        label: 'JOGO',
        icon: 'pi pi-users',
        command: (event) => {
          this.router.navigate(['jogo']);
        }
      },
    ];
  }
}
