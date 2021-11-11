export class Aluno{
    private nome: string = '';  
    private nota: number = -1;
    private id: string = '';

    public getNota(){
        return this.nota;
    }

    public setNota(nota: number){
        this.nota = nota;
    }

    public getNome(){
        return this.nome;
    }
    public getId(){
        return this.id;
    }

}
