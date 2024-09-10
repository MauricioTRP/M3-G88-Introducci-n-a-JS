import Book from "./Books.mjs";
import PrestamoLibro from "./PrestamoLibros.mjs";

let book = new  Book(
  '12354',
  'Contemplando la Luna',
  'Sagyo',
  '1650',
  'Poesía',
  'Libro de poseía budista',
  'https://fakeimg.pl/667x1000/cc6600'
)

console.log('El libro es válido',book.isValid())
book.title = 'Crónicas del pájaro que da cuerda al mundo'
console.log(book.title)

const librosAlejandro = new PrestamoLibro(book)
librosAlejandro.libros = 'Nuevo libro'
console.log(librosAlejandro.libros)
