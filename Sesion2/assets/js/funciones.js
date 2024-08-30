console.log('Estamos usando JS')

/**
 * Palabras reservadas
 * 
 * let: asignar un valor a una variable
 * cons: asigna valor a una constante
 * var: asigna valor a una variable (forma antigua)
 * console: herramientas de consola
 * function: definir funciones
 * return: define el retorno de una función
 */

/**
 * Función sin input, y con efecto secundario
 * alertadora es el nombre
 * () : acá irá el input
 * {} : cuerpo de la función
 */
function alertadora () {
  /** cuerpo de la función */
  alert('Estoy ejecutando la función alertadora')
}

/**
 * Funcion con input, con efecto secundario
 */
function alertadoraConInput( mensajeAlerta ) {
  alert(mensajeAlerta)
}

/**
 * Funcion con input y output (return)
 */
function alertadoraReturn(mensajeAlerta) {
  alert(mensajeAlerta)
  return mensajeAlerta
}

/**
 * Los llamados a las funciones son con parentesis,
 * después de que exista la definición
 * alertadora()
 * alertadoraReturn('mensaje de alerta')
 */

function calcularIVA(monto) {
  return monto * 0.19
}

function mostrarIva(monto) {
  console.log(monto * 0.19)
}

function constanteDos() {
  return 2
}

/**
 * Argumentos opcionales
 */
function calcularIvaEjemplo(precioProducto , nombre = 'Producto Ficticio') {
  let resultado = precioProducto * 0.19 // calculó IVA
  // creó una cadena de texto, y la retorna
  return  ` el precio del iva del ${nombre} es $${resultado}` 
}

/** Funciones anónimas */
const miVariable = function () {
  console.log('Estoy en una función anónima')
  return 'La función está asignada a "miVariable"'
}

const porcionarIngrediente = function(ingrediente, comensales, unidadMedida) {
  return `Necesitas ${comensales} ${unidadMedida} de ${ingrediente}`
}

/**
 * Arrow Function
 * (anonimas)
 * (): argumentos
 * =>: regla de escritura
 * {}: cuerpo de la función
 */
const preparacionPorotos = comensales => {
  let ingredientes = [
    'Porotos',
    'Zapallo',
    'Cebolla',
    'Ajo',
    'Aji Color',
    'Sal',
    'Fideos',
    'Longaniza',
    'Agua',
    'Pimienta',
    'Comino'
  ]

  console.log("Para cocinar los mejores porotos del universo, debes conseguir los siguientes ingredientes: ...")
  
  /** Porcionamos ingredientes */
  // let indice = 0
  // while(indice < ingredientes.length) {
  //   console.log(porcionarIngrediente(ingredientes[indice], comensales, 'kilos'))

  //   indice = indice + 1
  // }
  for(let ingrediente of ingredientes) {
    console.log(porcionarIngrediente(ingredientes[indice], comensales, 'kilos'))
  }
}

/**
 * 
 * (): argumentos, sólo si no trae argumentos, o si tiene más de un argumento
 * {}: cuerpo, sólo si es más de una línea y si no se usa, asume que retorna algo 
 *      en caso de usar el cuerpo y querer que retorne algo es necario usar
 *      la palabra clave return
 *      en caso de no uso, será un función con efecto secundario
 */
const sumar = (a, b) => a + b;

const sumar2 = (a, b) => {   
  return a + b; 
};
