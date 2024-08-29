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

const porciones = function(ingrediente, comensales, unidadMedida) {
  return `Necesitas ${comensales} ${unidadMedida} de ${ingrediente}`
}

/**
 * Arrow Function
 */
const preparacionPorotos = () => {

}