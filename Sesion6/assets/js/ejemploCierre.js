let estudiantes = ['Maxi', 'María', 'Tiare', 'Dayana', 'Nestor']

/**
 * metodo map, convertimos texto, en "formato" HTML
 */

const listaEstudiantes = estudiantes.map(estudiante => `<li>${estudiante}</li>`)

/**
 * Actualmente lista de estudiantes tiene en cada casilla
 * 
 * Array<['<li>NombreEstudiante</li>']>
 */

const textoListaEstudiantes = listaEstudiantes.join('')

/**
 * textoListaEstudiantes
 * 
 * string
 * <li>estudiante1</li><li>estudiante2</li><li>estudiante3</li>...
 */

/**
 * Comenzamos proceso para agregar lista al documento (DOM)
 * 
 * 1.- creamos elemento ul vacío (sólo vive en la memoria)
 */

const ul = document.createElement('ul')

/** 2- agregamos lista de estudiantes dentro del elemento ul */

ul.innerHTML = textoListaEstudiantes

/** 3.- buscamos elemento en nuestro HTML, donde se agregará el "ul" */

document.getElementById('app').appendChild(ul)
