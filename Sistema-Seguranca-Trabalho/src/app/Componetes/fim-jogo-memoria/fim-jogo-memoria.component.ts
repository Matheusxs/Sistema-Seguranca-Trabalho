import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-fim-jogo-memoria',
  templateUrl: './fim-jogo-memoria.component.html',
  styleUrls: ['./fim-jogo-memoria.component.css']
})
export class FimJogoMemoriaComponent implements OnInit {

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private router: Router
    ) { }

  tempo: string = "";

  ngOnInit(): void {
    this.tempo = this.config.data.tempo;
  }

  public concluir(){
    this.router.navigate(['']);
    this.ref.close();
  }
}
