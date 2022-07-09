import { Jogador } from "./Jogador";

export class Jogo{
    private id: string;
    private criador_id: string= '';
    private id_visualizar: string;
    private titulo: string = '';
    private tempo_inicio: number = 240;
    private tempo_max: number = 310;
    private quantidade_tentativas: number = 10;
    private prioridade_tempo: number = 50;
    private mostrar_cartas_antes: boolean = false;
    private cartas_selecionadas: string[] = [];
    private quantidade_cartas: number = 0;
    private jogadores: Jogador[] = [];
    
    public constructor(
        criador_id: string,
        titulo: string,
        tempo_inicio: number,
        tempo_max: number,
        quantidade_tentativas: number,
        prioridade_tempo: number,
        mostrar_cartas_antes: boolean,
        cartas_selecionadas: string[],
        quantidade_cartas: number
    ){
        this.id = '';
        this.id_visualizar = '';
        this.criador_id = criador_id;
        this.titulo = titulo;
        this.tempo_inicio = tempo_inicio;
        this.tempo_max = tempo_max;
        this.quantidade_tentativas = quantidade_tentativas;
        this.prioridade_tempo = prioridade_tempo;
        this.mostrar_cartas_antes = mostrar_cartas_antes;
        this.cartas_selecionadas = cartas_selecionadas;
        this.quantidade_cartas = quantidade_cartas;
        this.jogadores = [];
    }

    public getId(): string{
        return this.id;
    }

    public getIdVisualizar(): string{
        return this.id_visualizar;
    }

    public getCriadorId(): string{
        return this.criador_id;
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

    public setIdVisualizar(id_visualizar: string){
        this.id_visualizar = id_visualizar;
    }

    public setCriadorId(criador_id: string){
        this.criador_id = criador_id;
    }

    public setId(id: string){
        this.id = id;
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

    public getQuantidadeCartas(): number{
        return this.quantidade_cartas;
    }

    public setQuantidadeCartas(quantidade_cartas: number){
        this.quantidade_cartas = quantidade_cartas;
    }

    public getCartasSelecionada(){
        return this.cartas_selecionadas;
    }

    public setCartasSelecionada(cartas_selecionadas: string[]){
        this.cartas_selecionadas = cartas_selecionadas;
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

    public getPontuacao(tempo: number, tentativas: number): number{
        let pontuacao = 10;
        if(tempo > this.tempo_inicio){
            const tempo_ultrapassado = tempo - this.tempo_inicio;
            console.log("tempo_ultrapassado", tempo_ultrapassado);
            const tempo_ultrapassado_porcentagem = tempo_ultrapassado / (this.tempo_max - this.tempo_inicio);
            console.log("tempo_ultrapassado_porcentagem", tempo_ultrapassado_porcentagem);
            const prioridade_tempo_porcentagem = this.prioridade_tempo / 100;
            console.log("prioridade_tempo_porcentagem", prioridade_tempo_porcentagem);
            pontuacao = pontuacao - (tempo_ultrapassado_porcentagem * 10) * prioridade_tempo_porcentagem;
            console.log("pontuacao", pontuacao);
        }
        if(tentativas > this.quantidade_tentativas){
            const tentativas_excedidas = tentativas - this.quantidade_tentativas;
            console.log("tentativas_excedidas", tentativas_excedidas);
            const prioridade_tentativas_porcentagem = (100 - this.prioridade_tempo) / 100;
            console.log("prioridade_tentativas_porcentagem", prioridade_tentativas_porcentagem);
            let pontuacao_tentativas = pontuacao * prioridade_tentativas_porcentagem;
            console.log("pontuacao_tentativas", pontuacao_tentativas);
            const pontuacao_perdida_tentativas = Math.min( 0.25 * tentativas_excedidas, pontuacao_tentativas);
            console.log("pontuacao_perdida_tentativas", pontuacao_perdida_tentativas);
            pontuacao = pontuacao - pontuacao_perdida_tentativas;
        }
        return parseFloat(pontuacao.toFixed(2));

    }

    public toString(): string{
        return "Jogo: " + this.titulo + " | Tempo Inicio: " + this.tempo_inicio + " | Tempo Max: " + this.tempo_max + " | Quantidade Tentativas: " + this.quantidade_tentativas + " | Prioridade Tempo: " + this.prioridade_tempo + " | Mostrar Cartas Antes: " + this.mostrar_cartas_antes;
    }

}