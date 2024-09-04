/**
 * Productos
 */

class Producto {
  /** constructor -> manual de construccion */
  constructor(sku, nombre, descripcion, precio) {
    this.sku = sku
    this.nombre = nombre
    this.descripcion = descripcion
    this.precio = precio
  }
}

/**
 * Constructor de Bebidas
 */

/** extends -> nos dice quien es el padre */
class Bebida extends Producto {
  constructor(sku, nombre, descripcion, precio, cc, esAlcoholica) {
    /**
     * super -> sirve para "llamar al manual de construccion del padre"
     */
    super(sku, nombre, descripcion, precio)
    this.cc = cc
    this.esAlcoholica = esAlcoholica
  }
}

/** exporta al exterior las clases */
export { Producto, Bebida }