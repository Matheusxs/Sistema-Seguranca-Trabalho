import { Jogador } from "./Jogador";

export class Jogo{
    private titulo: string = '';
    private tempo: number = 0;
    private jogadores: Jogador[] = [];
    
    public constructor(titulo: string, tempo: number, jogadores: []){
        this.titulo = titulo;
        this.tempo = tempo;
        this.jogadores = jogadores;
    }

    public getTitulo(): string{
        return this.titulo;
    }

    public getTempo(): number{
        return this.tempo;
    }

    public getJogadores(): Jogador[]{
        return this.jogadores;
    }

    public setTitulo(titulo: string){
        this.titulo = titulo;
    }

    public setTempo(tempo: number){
        this.tempo = tempo;
    }

    public setJogadores(jogadores: []){
        this.jogadores = jogadores;
    }

    public addJogador(jogador: Jogador){
        this.jogadores.push(jogador);
    }

    public removeJogador(jogador: Jogador){
        this.jogadores.splice(this.jogadores.indexOf(jogador), 1);
    }

    public getJogador(index: number){
        return this.jogadores[index];
    }
}