export class Questao{
    imagem: string = ""; 
    respostas: string[] = [];
    resposta: string = "";
    indexCorreto = 0;
    indexEscolhido = -1;
    id = "000";

    placas: string[] = [
        "001",
        "002",
        "003",
        "004",
        "005",
        "006",
        "007",
        "008",
        "009",
        "010",
        "011",
    ];

    placasNomes: string[] = [
        "Alta Temperatura",
        "Alta Voltagem",
        "Atmosfera Explosiva",
        "Campo Eletromagnetico",
        "Forte Campo Magnético",
        "Material Radioativo",
        "Raio Laser",
        "Substâncias Comburante",
        "Substâncias Explosivas",
        "Substâncias Toxicas",
        "Veiculo de Movimenta Carga"
    ];

    constructor(questoesExistentes: string[]){
        this.escolherPlaca(questoesExistentes);
        this.gerarRespostas();
    }

    private escolherPlaca(questoesExistentes: string[]){
        this.resposta = this.placasNomes[this.getRandomInt(0, this.placasNomes.length)];
        this.id = this.placas[this.placasNomes.indexOf(this.resposta)];
        this.imagem = "/assets/Placas/"+this.id+".jpg";

        if (questoesExistentes.indexOf(this.id) != -1) {
            this.resposta = "";
            this.imagem = "";
            this.escolherPlaca(questoesExistentes);
        }
    }

    private gerarRespostas(){
        let respostaCertaColocada = false;
        for(let i = 0; i<5;i++){
            let chance = this.getRandomInt(0, 5);
            if (i == 4 && !respostaCertaColocada) {
                this.respostas[i] = this.resposta; 
                this.indexCorreto = i;
            }else if (chance == 0 && !respostaCertaColocada) {
                respostaCertaColocada = true;
                this.respostas[i] = this.resposta;
                this.indexCorreto = i;
            }else{
                this.respostas[i] = this.getRespostaErrada();
            } 
        }
    }

    private getRespostaErrada(){
        let respostaAtual = "";
        while (true) {
            if (this.respostas.indexOf(respostaAtual) == -1 && respostaAtual != "" && respostaAtual != this.resposta) {
                return respostaAtual;
            }else{ 
                respostaAtual = this.placasNomes[this.getRandomInt(0, this.placasNomes.length)];
            }
        }
    }
    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}