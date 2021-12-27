export class Jogador{
    private id: string = '';
    private nome: string = '';
    private tentativas: number = 0;
    private tempo: number = 0;

    public constructor(id: string, nome: string, tentativas: number, tempo: number){
        this.id = id;
        this.nome = nome;
        this.tentativas = tentativas;
        this.tempo = tempo;
    }

    public getId(): string{
        return this.id;
    }

    public getNome(): string{
        return this.nome;
    }

    public getTentativas(): number{
        return this.tentativas;
    }

    public getTempo(): number{
        return this.tempo;
    }

    public setId(id: string): void{
        this.id = id;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public setTentativas(tentativas: number): void{
        this.tentativas = tentativas;
    }

    public setTempo(tempo: number): void{
        this.tempo = tempo;
    }

    public toString(): string{
        return "Nome: " + this.nome + " Tentativas: " + this.tentativas + " Tempo: " + this.tempo;
    }
}