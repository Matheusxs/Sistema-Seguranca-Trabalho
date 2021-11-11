import { Aluno } from "./Aluno";

export class Turma{

    private listaAlunos: Aluno[] = [];
    private id: string = '';

    public adicionarAluno(aluno:Aluno){
        this.listaAlunos.push(aluno);
    }

    public removerAluno(idAluno:string){
        this.listaAlunos.forEach((aluno, index) => {
            if (idAluno == aluno.getId()) {
                this.listaAlunos.splice(index, 1);
            }
        });    
    }

    public getAluno(idAluno:string){
        this.listaAlunos.forEach(aluno => {
            if (idAluno == aluno.getId()) {
                return aluno;
            }
        });
        return null;    
    }
}