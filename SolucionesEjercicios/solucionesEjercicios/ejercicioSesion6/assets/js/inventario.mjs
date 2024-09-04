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

  inventario.push(producto)
  console.log(inventario)
}

/** Luego se pasa al evento */
document.querySelector('form').addEventListener('submit', manejoFormulario)
