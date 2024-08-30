// INICIO
//     iniciamos variable "fin", en falso, para indicar finalizacin del proceso
//     iniciamos una variable "carrito", para almacenar las bebidas

//     INICIO_CICLO
//       preguntar si añade algo al carrito // prompt

//       en caso de añadir algo
//         agregarlo a la variable "carrito"

//         "vuelve al inicio del ciclo"

//       en otro caso
//         finalizar proceso -> "fin" = verdad
//       fin consulta
//     FIN_CICLO
// FIN

const agregarProducto = () => {
  let fin = false; // inicializada la variable fin en falso
  let carrito = []; // iniciamos un array "lista" de productos en la variable carrito

  while (!fin) {
    let bebida = prompt('Digame por favor qué bebida alcoholica o licor quiere llevar (para salir escriba "fin")')
    if(bebida != 'fin') {
      carrito.push(bebida)
    } else {
      fin = true // 👁️👁️ actualizamos la condición de detención
    }
    // vuelve a evaluar !fin 
  }

  // una vez terminado el ciclo, retornamos el carrito con los productos 🍺🍻
  return carrito
}

const validarEdad = () => {
  
  // pedir edad al usuario
  // prompt retornaba string
  let edad = Number(prompt('Por favor digame su edad')) // expresion regular soluciona el problema de entrada de texto

  if(edad >= 18) {
    alert('Puedes Comprar')
    return true
  } else {
    alert('Lamentablemente no puedes comprar 🩴')
    return false
  }
}

/**
 * Se encargará el proceso de compra hasta que llegue a la caja
 */
function main() {
  // Manejar el carrito del usuario -> ya existe la función agregarProducto
  // Una vez termina de agregar productos valida edad
  // Si es mayor de 18 años -> puede pasar a la caja
  const carrito = agregarProducto()
  console.log(carrito)
  const esMayorEdad = validarEdad()

  /**
   * proceso de pago
   */
}