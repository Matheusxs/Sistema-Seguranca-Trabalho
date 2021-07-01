export class Carta{
    
    id = "";
    tipo = "";
    conteudo = "";
    isSelecionada = false;
    isCorreto = false;

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
        "011"
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
    
    constructor(cartasExistentes: Carta[]){
        if (cartasExistentes.length == 0) {
            this.getNovaCarta(cartasExistentes);
        }else if (cartasExistentes[cartasExistentes.length-1].tipo == "texto") {
            this.getNovaCarta(cartasExistentes);
        }else{
            this.getCartaTexto(cartasExistentes);
        }
    }

    private getNovaCarta(cartasExistentes: Carta[]){
        this.tipo = "imagem";
        
        this.id = this.placas[this.getRandomInt(0, this.placas.length)];
        this.conteudo = "/assets/Placas/"+this.id+".jpg";

        if (this.cartaExiste(cartasExistentes)) {
            
            this.conteudo = "";
            this.id = "";
            this.getNovaCarta(cartasExistentes);
        }
    }

    private getCartaTexto(cartasExistentes: Carta[]){
        this.tipo = "texto";
        this.id = cartasExistentes[cartasExistentes.length-1].id;
        this.conteudo = this.placasNomes[this.placas.indexOf(this.id)];
    }

    private cartaExiste(cartasExistentes: Carta[]){
        let existe = false;

        for (let i = 0; i < cartasExistentes.length; i++) {
            if (cartasExistentes[i].id == this.id) {
                existe = true;
            }
        }
        return existe;
    }

    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}