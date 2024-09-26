class Caja {
  constructor ({alto, ancho, largo}) {
    this.alto = alto
    this.ancho = ancho
    this.largo = largo
  }
  
  calcularPapel() {
    let lado1 = this.largo * this.ancho;
    let lado2 = this.ancho * this.alto;
    let lado3 = this.alto * this.largo;
    let ladoMenor = Math.min(lado1, lado2, lado3);
    const areaSuperficie = 2 * (lado1 + lado2 + lado3);
    return areaSuperficie + ladoMenor
  }
}

export default Caja