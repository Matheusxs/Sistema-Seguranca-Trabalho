//Modulos do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {KnobModule} from 'primeng/knob';
import {SkeletonModule} from 'primeng/skeleton';
import {SliderModule} from 'primeng/slider';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';

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
import { JogoMemoriaComponent } from './Componetes/jogo-memoria/jogo-memoria.component';
import { FimJogoMemoriaComponent } from './Componetes/fim-jogo-memoria/fim-jogo-memoria.component';
import { IniciarJogoMemoriaComponent } from './Componetes/iniciar-jogo-memoria/iniciar-jogo-memoria.component';
import { ConfigurarJogoMemoriaComponent } from './Componetes/configurar-jogo-memoria/configurar-jogo-memoria.component';
import { VisualizacaoJogoMemoriaComponent } from './Componetes/visualizacao-jogo-memoria/visualizacao-jogo-memoria.component';
import { PickListComponent } from './Componetes/subcomponents/pick-list/pick-list.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'validar-email', component: ValidarEmailComponent},
  {path: 'atividade', component: JogoComponent},
  {path: 'jogo-memoria', component: JogoMemoriaComponent}
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
    JogoMemoriaComponent,
    FimJogoMemoriaComponent,
    IniciarJogoMemoriaComponent,
    ConfigurarJogoMemoriaComponent,
    VisualizacaoJogoMemoriaComponent,
    PickListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    
    ButtonModule,
    InputTextModule,
    CardModule,
    PasswordModule,
    MenubarModule,
    TabViewModule,
    DividerModule,
    SplitterModule,
    DynamicDialogModule,
    KnobModule,
    SkeletonModule,
    SliderModule,
    InputSwitchModule,
    ProgressBarModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FimJogoMemoriaComponent,
    IniciarJogoMemoriaComponent,
    ConfigurarJogoMemoriaComponent,
    VisualizacaoJogoMemoriaComponent,
]
})
export class AppModule { }
