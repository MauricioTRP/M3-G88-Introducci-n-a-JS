import { input } from "./input.mjs";
import Caja from "./Caja.mjs";

/**
 * Limpiar el texto para ser utilizado
 */
let arrayDatos = input.split('\n')
let arrayLimpia = arrayDatos.map((lines) => lines.replace(/x/g, ','))

/**
 * Ocupamos un array limpio
 * para crear las cajas
 */

let total = 0
const cajasRegalos = arrayLimpia.forEach(dato => {
  let [largo, ancho, alto] = dato.split(',')
  total += new Caja({alto, ancho, largo}).calcularPapel()
})


/**
 * Segunda opción de solución
 */

const lines = input.split('\n')
const arrayLimpio = lines.map((line) => {
  const [ancho, largo, alto] = line.split('x').map(Number)

  return { ancho, largo, alto }
})

console.log(arrayLimpio)

console.log(total)


