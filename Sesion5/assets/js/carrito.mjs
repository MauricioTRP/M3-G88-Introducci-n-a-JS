import { Producto, Bebida } from "./classes.mjs";

/** Iniciamos inventario vacío */
const inventario = []

/** Primero se define funcion manejadora de formulario */
const manejoFormulario = (event) => {
  /** Previene comportamiento por defecto */
  event.preventDefault()
  
  /** Evento es cómo lo maneja el navegador */
  console.log(event)
  /** event.target -> formulario */
  const form = event.target

  /** event.target.nombreVariable -> elemento input */
  console.log(form.sku)

  /** event.target.nombreVariable.value -> valor ingresado por usuario */
  console.log(form.sku.value)

  /** elementos de tipo check tienen la propiedad checked */
  console.log(form.esAlcoholica.checked)

  const { sku, nombre, descripcion, precio, cc, esAlcoholica } = form

  const skuValor = sku.value
  const nombreValor = nombre.value
  const descripcionValor = descripcion.value
  const ccValor = cc.value
  const esAlcoholicaValor = esAlcoholica.checked
  const precioValor = precio.value

  const producto = new Bebida(
    skuValor,
    nombreValor,
    descripcionValor,
    precioValor,
    ccValor,
    esAlcoholicaValor
  )

  console.log(producto)
  inventario.push(producto)
  console.log(inventario)
}

/** Luego se pasa al evento */
document.querySelector('form').addEventListener('submit', manejoFormulario)


const agregarProducto = () => {
  let fin // refactorización, fin es de tipo falsey
  let carrito = [];

  while (!fin) {
    let bebida = prompt('Digame por favor qué bebida alcoholica o licor quiere llevar (para salir escriba "fin")').trim()

    /** 
     * Analizamos si el usuario ingresó información 
     * mediante truthy y falsey
     **/
    if(bebida) {
      /** Ahora analizamos si el usuario quiere salir */
      if(bebida != 'fin') {
        carrito.push(bebida)
      } else {
        /** Caso quiere salir */
        fin = true 
      }
    }
  }

  return carrito
}


const validarProductosParaMayoresDeEdad = (producto) => {
  /** 
   * trim limpia espacios blancos 
   * toLowerCase -> convierte a minúsculas
   **/
  switch (producto.toLowerCase().trim()) {
    case 'cerveza':
      return true
      break;
    case 'ron':
      return true
      break
    case 'vino':
      return true
      break
    case 'araucano':
      return true
      break
    case 'chicha':
      return true
      break
    default:
      return false
      break;
  }
}

const menoresDeEdadProductos = (producto) => {
  return !validarProductosParaMayoresDeEdad(producto)
}

const validarEdad = () => {
  let edad = Number(prompt('Por favor digame su edad')) 

  if(edad >= 18) {
    alert('Puedes Comprar')
    return true
  } else {
    alert('Sólo puedes comprar lo siguiente')
    return false
  }
}

function main() {
  const carrito = agregarProducto()

  const productosMayoresDeEdad = carrito.filter(validarProductosParaMayoresDeEdad)
  const productosMenoresDeEdad = carrito.filter(menoresDeEdadProductos)

  /** Validamos si hay productos para mayores de edad */
  if(productosMayoresDeEdad.length) {
    const esMayorEdad = validarEdad()

    if(esMayorEdad) {
      return carrito
    } else {
      return productosMenoresDeEdad
    }
  } else {
    return carrito
  }
}
