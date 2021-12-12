import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/Servicos/auth/auth.service';
import { ConfigurarJogoMemoriaComponent } from '../configurar-jogo-memoria/configurar-jogo-memoria.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [DialogService]
})

export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(
    public authService: AuthService, private router: Router,
    public dialogService: DialogService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Jogo Memoria',
        icon: 'pi pi-users',
        command: (event) => {
          this.router.navigate(['jogo-memoria']);
        }
      },
      {
        label: 'Criar jogo',
        icon: 'pi pi-plus-circle',
        command: (event) => {
          this.mostraResultado();
        }
      },
    ];
  }

  private mostraResultado() {
    const ref = this.dialogService.open(ConfigurarJogoMemoriaComponent, {
      header: '',
      width: '70%',
      closable: true,
    });
  }
}