//Modulos do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//Modulos do Firebase
import { AngularFireModule } from '@angular/fire' ;
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";

//Modolos do Primeng
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {DividerModule} from 'primeng/divider';
import {SplitterModule} from 'primeng/splitter';

//Componetes do Sistema
import { AppComponent } from './app.component';
import { LoginComponent } from './Componetes/login/login.component';
import { CadastroComponent } from './Componetes/cadastro/cadastro.component';
import { ValidarEmailComponent } from './Componetes/validar-email/validar-email.component';
import { MenuComponent } from './Componetes/menu/menu.component';
import { HomeComponent } from './Componetes/home/home.component';
import { RodapeComponent } from './Componetes/rodape/rodape.component';
import { AdminComponent } from './Componetes/admin/admin.component';
import { MenuAdminComponent } from './Componetes/menu-admin/menu-admin.component';
import { TurmasComponent } from './Componetes/turmas/turmas.component';
import { JogoComponent } from './Componetes/jogo/jogo.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'validar-email', component: ValidarEmailComponent},
  {path: 'jogo', component: JogoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ValidarEmailComponent,
    MenuComponent,
    HomeComponent,
    RodapeComponent,
    AdminComponent,
    MenuAdminComponent,
    TurmasComponent,
    JogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireAuthModule,
    
    ButtonModule,
    InputTextModule,
    CardModule,
    PasswordModule,
    MenubarModule,
    TabViewModule,
    DividerModule,
    SplitterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
