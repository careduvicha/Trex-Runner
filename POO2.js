class Games {
    constructor(nome, genero, avaliacao) {
        this.nome = nome
        this.genero = genero
        this.avaliacao = avaliacao
        this.game = {
            nome: this.nome,
            genero: this.genero,
            avaliacao: this.avaliacao
        }
    }

    displayGame() {
        console.log(this.game)
    }
}
var game1
var game2
var game3
function setup(){
createCanvas(600,400)
game1=new Games("minecraft","sobrevivencia",4.5)
game1.displayGame()
}
function draw (){

}
