class Caja {
  constructor ({alto, ancho, largo}) {
    this.alto = alto
    this.ancho = ancho
    this.largo = largo
  }
  
  calcularPapel() {
    let cara1 = this.largo * this.ancho;
    let cara2 = this.ancho * this.alto;
    let cara3 = this.alto * this.largo;
    let ladoMenor = Math.min(cara1, cara2, cara3);
    const areaSuperficie = 2 * (cara1 + cara2 + cara3);
    return areaSuperficie + ladoMenor
  }

  calcularCinta() {
    const lados = [this.largo, this.ancho, this.alto].sort((a,b) => a-b)

    const perimetroChico = 2 * (lados[0] + lados[1])
    const area = lados.reduce((acc, lado) => acc *= lado)

    return perimetroChico + area
  }
}

export default Caja