let dataFinanciera

fetch('https://mindicador.cl/api')
  /**
   * respuesta -> "Response"
   * 
   * respuesta = { body: readableStream }
   * 
   * respuesta.json -> "consumir el body" -
   * > traer la información desde el servidor (asincrono)
   */
  .then(respuesta => respuesta.json())

  /**
   * la información desde el servidor ahora se llama data
   */
  .then(data => {
    dataFinanciera = data
  })

let farmaciasTurno

fetch('https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php')
  .then(response => response.json())
  .then(data => {
    farmaciasTurno = data
  })

console.log(farmaciasTurno)
  /**
   * 
   * numero => numero * 2
   */

/**
 * Seleccionamos Formulario
 */
document
  .querySelector('#buscador-farmacias')
  .addEventListener("submit", event => {
    event.preventDefault()

    /**
     * localidad es el input con name="localidad"
     * 
     * localidad.value -> traer información del usuario
     */
    const { localidad } = event.target
    const busquedaLocalidad = localidad.value.trim().toUpperCase()

    const farmaciaLocalidad = farmaciasTurno.filter(farmacia => farmacia.localidad_nombre == busquedaLocalidad)

    console.log(farmaciaLocalidad)
  })