import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Questao } from 'src/app/Models/Questao';
import { AuthService } from 'src/app/Servicos/auth.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  questoes: Questao[] = [];

  questoesExistentes: string[] = [];

    constructor(private authService: AuthService, 
      private router: Router) {

  }
 userReady = false;
  ngOnInit(): void {
    /* if(!this.authService.userData && !this.authService.userReady){ 
      this.router.navigate(["login"]);
    }else{
      let time = timer(200, 1000).subscribe(() =>{
        if(this.authService.userData != undefined){
          this.userReady = true;
          time.unsubscribe();
        }
      });
      let time2 = timer(200, 1000).subscribe(() =>{
        if(this.userReady){
          if(this.authService.userData.admin !=undefined){
              time2.unsubscribe();
            if(this.authService.userData.admin){
              this.router.navigate(['admin']);
            }
          }
        }
      });
    }*/
    for (let index = 0; index < 10; index++) {
      let questao = new Questao(this.questoesExistentes);
      this.questoes.push(questao);
      this.questoesExistentes.push(questao.id);
    }
  }
  checarResposta(index: number, questao: Questao){
    questao.indexEscolhido = index;
  }
}

