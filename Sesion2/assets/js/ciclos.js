let estaciones = [
  "Plaza Puente Alto",
  "Las Mercedes",
  "Protectora de la infancia",
  "Hospital Sotero del Rio",
  "Elisa Correa",
  "Los Quillayes",
  "San Jose de la Estrella",
  "Trinidad",
  "Rojas Magallanes",
  "Vicente Valdes",
  "Vicuña Mackenna",
  "Macul",
  "Las Torres",
  "Quilin",
  "Los Presidentes",
  "Los Orientales"
];

for(let estacion of estaciones) {
  console.log('Estoy en la estación', estacion)

  /**
   * operador IF, hacer una pregunta
   */
  if(estacion == 'Macul') {
    console.log('aquí me bajo')
    break
  }
}

let palabra = 'Supercalifragilísticoespialidoso'
let index = 0
for(let letra of palabra) {
  console.log(letra)
  index++
}

/** String en arreglos */
const palabra2 = 'NuevaPalabra'

palabra2.split('')