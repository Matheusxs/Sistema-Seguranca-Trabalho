import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthService } from 'src/app/Servicos/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Área do aluno',
          icon: 'pi pi-fw pi-pencil'
      },
      {
          label: 'Informações Gerais',
          icon: 'pi pi-fw pi-pencil'
      }
    ];
  }
}
