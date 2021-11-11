import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/Servicos/auth/auth.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Turmas',
          icon: 'pi pi-users'
      },
      {
          label: 'Forum',
          icon: 'pi pi-book'
      },
      {
        label: 'Mural',
        icon: 'pi pi-users'
      },
    ];
  }
}
