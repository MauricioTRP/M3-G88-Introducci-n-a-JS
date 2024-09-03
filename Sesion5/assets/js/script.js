/**
 * Sesión 5
 * 
 * Programación Orientada a Objetos
 * POO - OOP
 */

console.log('Sesón  - OOP')

const productos = [
  // laptop usa lugar 0
  {
    id: 1,
    nombre: 'Laptop',
    precio: 1500,
    cantidad: 10,
  },
  // smartphone usa lugar 1
  {
    id: 2,
    nombre: 'Smartphone',
    precio: 800,
    cantidad: 20,
  },
  // tablet usa lugar 2
  {
    id: 3,
    nombre: 'Tablet',
    precio: 500,
    cantidad: 15,
  }
];

/**
 * Con notación de corchetes accedemos a un elemento específico
 */

let laptop = productos[0]

/**
 * Con notación punto - propiedad o corchete + nombre propiedad
 * podemos acceder al valor de una llave
 */

const precioLaptop = laptop.precio
const cantidadLaptop = laptop['cantidad']


/**
 * Definiendo un producto
 * 
 * precio, cc, stock, graduacion_alcoholica, tipo, descripcion, vencimiento
 * fabrica de productos
 */

class BebidaAlcoholica {
  constructor(precio, cc, stock, graduacion, tipo, descripcion, vencimiento, mayorEdad) {
    /** this -> sirve para "pegar" atributo al objeto que se creará */
    this.precio = precio
    this.cc = cc
    this.stock = stock
    this.graduacion = graduacion
    this.tipo = tipo
    this.descripcion = descripcion
    this.vencimiento = vencimiento
    this.mayorEdad = mayorEdad
  }
}

const manquehuito = new BebidaAlcoholica(2500, 1000, 10, 18, 'Vino', 'Vino saborizado', '02/25', true)

/**
 * Acepta valores "indefinidos", y los convierte
 */
class Bebida {
  constructor(precio = 0, cc, vencimiento) {
      this.precio = precio
      this.cc = cc
      this.vencimiento = vencimiento
  }
}