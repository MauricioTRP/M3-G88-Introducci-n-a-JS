/**
 * Gentileza de Sebastián Peña
 */

function isbnValidator(isbnCode) {
  if (typeof isbnCode !== "string") return false;

  function replaceDashes(sequence) {
    return sequence.replace(/[-\s]/g, "");
  }

  function isValidISBN10(isbn) {
    if (!/^\d{9}[\dX]$/i.test(isbn)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += (10 - i) * parseInt(isbn[i]);
    }

    let checkDigit = isbn[9].toUpperCase();
    sum += checkDigit === "X" ? 10 : parseInt(checkDigit);

    return sum % 11 === 0;
  }

  function isValidISBN13(isbn) {
    if (!/^\d{13}$/.test(isbn)) return false;

    let sum = 0;
    for (let i = 0; i < 13; i++) {
      sum += (i % 2 === 0 ? 1 : 3) * parseInt(isbn[i]);
    }

    return sum % 10 === 0;
  }

  const cleanIsbn = replaceDashes(isbnCode);

  if (cleanIsbn.length === 10) {
    return isValidISBN10(cleanIsbn);
  } else if (cleanIsbn.length === 13) {
    return isValidISBN13(cleanIsbn);
  } else {
    return false;
  }
}

export default isbnValidator;