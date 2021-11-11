import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/Servicos/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  userReady = false;

  ngOnInit(): void {
    if(!this.authService.userData && !this.authService.userReady){ 
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
            if(!this.authService.userData.admin){
              this.router.navigate(['']);
            }
          }
        }
      });
    }
  }
}
