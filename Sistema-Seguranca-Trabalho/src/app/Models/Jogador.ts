export class Jogador{
    private nome: string = '';
    private pontuacao: number = 0;
    private tempo: number = 0;

    public constructor(nome: string, pontuacao: number, tempo: number){
        this.nome = nome;
        this.pontuacao = pontuacao;
        this.tempo = tempo;
    }

    public getNome(): string{
        return this.nome;
    }

    public getPontuacao(): number{
        return this.pontuacao;
    }

    public getTempo(): number{
        return this.tempo;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public setPontuacao(pontuacao: number): void{
        this.pontuacao = pontuacao;
    }

    public setTempo(tempo: number): void{
        this.tempo = tempo;
    }

    public toString(): string{
        return "Nome: " + this.nome + " Pontuação: " + this.pontuacao + " Tempo: " + this.tempo;
    }
}