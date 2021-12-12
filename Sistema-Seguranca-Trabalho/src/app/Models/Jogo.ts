import { Jogador } from "./Jogador";

export class Jogo{
    private titulo: string = '';
    private tempo_inicio: number = 240;
    private tempo_max: number = 310;
    private quantidade_tentativas: number = 10;
    private prioridade_tempo: number = 50;
    private mostrar_cartas_antes: boolean = false;
    private jogadores: Jogador[] = [];
    
    public constructor(titulo: string, tempo_inicio: number,  tempo_max: number, quantidade_tentativas: number, prioridade_tempo: number, mostrar_cartas_antes: boolean){
        this.titulo = titulo;
        this.tempo_inicio = tempo_inicio;
        this.tempo_max = tempo_max;
        this.quantidade_tentativas = quantidade_tentativas;
        this.prioridade_tempo = prioridade_tempo;
        this.mostrar_cartas_antes = mostrar_cartas_antes;
        this.jogadores = [];
    }

    public getTitulo(): string{
        return this.titulo;
    }

    public getTempoInicio(): number{
        return this.tempo_inicio;
    }

    public getTempoMax(): number{
        return this.tempo_max;
    }

    public getQuantidadeTentativas(): number{
        return this.quantidade_tentativas;
    }

    public getPrioridadeTempo(): number{
        return this.prioridade_tempo;
    }

    public getMostrarCartasAntes(): boolean{
        return this.mostrar_cartas_antes;
    }

    public getJogadores(): Jogador[]{
        return this.jogadores;
    }

    public setTitulo(titulo: string){
        this.titulo = titulo;
    }

    public setTempoInicio(tempo_inicio: number){
        this.tempo_inicio = tempo_inicio;
    }

    public setTempoMax(tempo_max: number){
        this.tempo_max = tempo_max;
    }

    public setQuantidadeTentativas(quantidade_tentativas: number){
        this.quantidade_tentativas = quantidade_tentativas;
    }

    public setPrioridadeTempo(prioridade_tempo: number){
        this.prioridade_tempo = prioridade_tempo;
    }

    public setMostrarCartasAntes(mostrar_cartas_antes: boolean){
        this.mostrar_cartas_antes = mostrar_cartas_antes;
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