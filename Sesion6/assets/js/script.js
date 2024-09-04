console.log('Sesión 6')

let arregloEstudiantes = [ 'Tilso', 'Pablo', 'Tiare', 'Carolina', 'Caroline', 'Maxi' ]

/**
 * ¡LA PROPIEDAD LENGTH ES DE CUIDADO!
 * 
 * arregloEstudiantes.length = 6 // cantidad de elementos que trae
 */


// agrega 9 "espacios vacíos"
arregloEstudiantes.length = 15 
console.log(arregloEstudiantes)

// "corta el arreglo" para que quede con 4 elementos
arregloEstudiantes.length = 4 
console.log(arregloEstudiantes)

// agregamos 2 elementos al final
// perdimos a 'Caroline' y a 'Maxi' del arreglo
arregloEstudiantes.length = 6
console.log(arregloEstudiantes)

// agregamos en un índice específico
arregloEstudiantes[ 7 ] = 'Daniel'
console.log(arregloEstudiantes)

/**
 * Metodos que mutan arreglos
 * 
 * push() -> agregar al final
 * unshift() -> agregar al principio
 * pop() -> elimina el último elemento y lo retorna
 * shift() -> elimina el primer elemento y lo retorna
 */

arregloEstudiantes.push('Eduardo')
console.log(arregloEstudiantes)

arregloEstudiantes.unshift('Dayanna')
console.log(arregloEstudiantes)

const ultimoEstudiante = arregloEstudiantes.pop()
console.log('Ultimo estudiante', ultimoEstudiante)
console.log('Arreglo estudiantes', arregloEstudiantes)

const primerEstudiante = arregloEstudiantes.shift()
console.log('Primer estudiante', primerEstudiante)
console.log('Arreglo estudiantes', arregloEstudiantes)

/**
 * Método concat une arreglos
 */
const segundoArregloEstudiantes = [ 'Juan', 'Felipe', 'Javier', 'Claudia', 'María' ]

const todosLosEstudiantes = arregloEstudiantes.concat(segundoArregloEstudiantes)

console.log(todosLosEstudiantes)

/**
 * Método Splice
 * Elimina en un índice dado, y de ser necesario, agrega nuevos
 * 
 * cantidadABorrar -> ser positiva
 * array.splice(indice, cantidadABorrar)
 */

todosLosEstudiantes.splice(4,1)
console.log(todosLosEstudiantes)

todosLosEstudiantes.splice(4, 2)
console.log(todosLosEstudiantes)

todosLosEstudiantes.splice(5, 1, 'Nuevo estudiante')
console.log(todosLosEstudiantes)

/** Agrega un elemento en ese índice */
todosLosEstudiantes.splice(6, 0, 'Otro estudiante')
console.log(todosLosEstudiantes)

const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(myFish.length - 3, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

/**
 * METODOS ITERADORES
 * 
 * Métodos para encontrar elementos dentro de un array
 * array.find(predicado) -> predicado es una funcion que retorna true | false
 * 
 */

const encontroClaudia = todosLosEstudiantes.find(estudiante => estudiante == 'Claudia')
console.log(encontroClaudia)
console.log(todosLosEstudiantes)

const wenceslao = todosLosEstudiantes.findIndex(estudiante => estudiante == 'wenceslao')
console.log(wenceslao)

let indiceClaudia = todosLosEstudiantes.findIndex(estudiante => estudiante.trim().toLocaleLowerCase() == 'claudia')
console.log("Indice Claudia, antes de repetición",indiceClaudia)

/** Duplicamos a "Claudia" usando splice */
todosLosEstudiantes.splice(2, 0, 'Claudia')

/** consultamos nuevamente el indice */
indiceClaudia = todosLosEstudiantes.findIndex(estudiante => estudiante == 'Claudia')
console.log("Indice Claudia, DESPUES de repetición",indiceClaudia)

/**
 * Método forEach()
 * forEach -> "para cada" elemento
 * 
 * forEach(funcion) -> aplicar funcion a cada elemento del array
 * ¡¡¡no retorna nada!!!
 * ¡¡¡no modifica el arreglo original!!!
 */
const estudiantesUppercase = []

todosLosEstudiantes.forEach(estudiante => {
  estudiantesUppercase.push(estudiante.toUpperCase())
})

console.log('Método forEach')
console.log(estudiantesUppercase)
console.log(todosLosEstudiantes)

/**
 * Método map
 * 
 * mapea elemento por elemento, retorna un arreglo nuevo
 * no transforma el original
 */

let listaEstudiantesLowerCase = estudiantesUppercase.map(estudiante => {
  return `<li>${estudiante.toLowerCase()}</li>`
})

console.log('mapear estudiantesUpperCase -> estudiantesLowerCase')
console.log(listaEstudiantesLowerCase)
console.log(estudiantesUppercase)

/**
 * Metodos que transforman
 * 
 * .join() -> transforma de array a string
 * .split() -> transforma de string a array
 */

const textoTodosEstudiantes = todosLosEstudiantes.join(' - ')

/**
 * ejemplo split()
 */

const dataCSV = 'Marcelo,Pedro,Claudio,Alejandra,Tiare,Claudia'
const arregloDesdeData = dataCSV.split(',')

/**
 * aplicando join para crear lista de estudiantes
 * ul>li
 */

listaEstudiantesLowerCase = estudiantesUppercase
                              .map(estudiante => {
                                return `<li>${estudiante.toLowerCase()}</li>`
                              })
                              .join('')

