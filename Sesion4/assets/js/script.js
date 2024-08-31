console.log('Mensaje desde nuestro script.js')

/**
 * truthy
 * flasey: NaN, 0, null, undefined, '', false
 * 
 * https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

let carrito

// console.log("carrito tiene asignado", carrito)

if(carrito) {
  console.log('Carrito tiene asignado un valor:', carrito)
} else {
  console.log('Carrito aún no tiene asignado un valor')
}


