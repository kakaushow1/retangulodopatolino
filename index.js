class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura= largura;
    }
  mostrarAtributos(){
    return "Altura: " + this.altura + " Largura: " + this.largura
  }
  calcularArea(){
    let area= "Area da forma " + this.altura * this.largura
    return area
  }
  area(){
    return this.calcularArea();
  }
}

let quadrado= new Retangulo("10","10");
let retangulo= new Retangulo ("60", "30");
console.log(quadrado.mostrarAtributos(), retangulo.mostrarAtributos())
console.log(quadrado.calcularArea(), retangulo.calcularArea())
console.log(quadrado.area(), retangulo.area())
