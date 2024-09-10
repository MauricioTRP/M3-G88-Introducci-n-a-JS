class PrestamoLibro {
  #libros
  constructor(libro) {
    this.#libros = [libro]
  }

  get libros() {
    return this.#libros
  }

  set libros(libro) {
    this.#libros.push(libro)
  }
}


export default PrestamoLibro
