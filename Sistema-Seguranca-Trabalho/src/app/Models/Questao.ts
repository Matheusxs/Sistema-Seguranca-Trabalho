export class Questao{
    imagem: string = ""; 
    respostas: string[] = [];
    resposta: string = "";

    respostasErradas: string[] = [
        "Inflámavel",
        "Explosivo",
        "Radioativo",
        "Perigo de Morte",
        "Alta Voltagem",
        "Magnetismo Forte",
        "Alta Temperatura",
        "Baixa Temperatura",
        "Tóxico",
        "Radiação Laser"
    ];

    constructor(imagem: string, resposta: string){
        this.imagem = imagem;    
        this.resposta = resposta;

        this.gerarRespostas();
    }
    
    private gerarRespostas(){
        let respostaCertaColocada = false;
        for(let i = 0; i<5;i++){
            let chance = this.getRandomInt(0, 5);
            if (i == 4 && !respostaCertaColocada) {
                this.respostas[i] = this.resposta; 
            }else if (chance == 0 && !respostaCertaColocada) {
                respostaCertaColocada = true;
                this.respostas[i] = this.resposta;
            }else{
                this.respostas[i] = this.getRespostaErrada();
                console.log(this.respostas[i])
            } 
        }

    }
    private getRespostaErrada(){
        let respostaAtual = "";
        while (true) {
            if (this.respostas.indexOf(respostaAtual) == -1 && respostaAtual != "" && respostaAtual != this.resposta) {
                return respostaAtual;
            }else{ 
                respostaAtual = this.respostasErradas[this.getRandomInt(0, this.respostasErradas.length)];
            }
        }
    }
    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}