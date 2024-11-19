//ESERCIZI SUGLI IF: 


/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function findMajor(a, b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

const number1 = 10 //parseInt(prompt("inserisci il primo numero :"))
const number2 = 15 //parseInt(prompt("inserisci il secondo numero :"))

const major = findMajor(number1, number2);
console.log(`the higher number is : ${major}`);
// alert(`the higher number is: ${major}`);


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function showSizeCategory(size) {


    if (size < 5) {
        console.log("Tiny");
        // return "Tiny"

    } else if (size < 10) {
        console.log("Small");
        // return "Small"

    } else if (size < 15) {
        console.log("Medium");
        // return "Medium"

    } else if (size < 20) {
        console.log("Large");
        // return "Large"

    } else {
        console.log("Huge");
        // return "Huge"

    }
}

const taglia = 1
showSizeCategory(taglia)


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i <= 10; i++) {
    if (i === 3 || i === 8) {
        continue; // Salta il resto del ciclo per 3 e 8
    }
    console.log(i); // Stampa i numeri che non sono 3 o 8
}


/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " è un numero pari.");
    } else {
        console.log(i + " è un numero dispari.");
    }
}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function verificaOtto(a, b) {
    if (a === 8 || b === 8) {
        return true;

    } else if (a + b === 8 || a - b === 8) {
        return true;

    } else {
        return false;
    }
}

const a = 3
const b = 5
console.log(verificaOtto(a, b))


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function totalShoppingCart(subTotal, shipping, freeShipping) {
    if (subTotal > freeShipping ) {
        return subTotal
    }

    return subTotal + shipping
}

const freeShipping = 50
const subTotal = 100
const shipping = 10
const total = totalShoppingCart(subTotal, shipping, freeShipping)
console.log("il totale è : " + total) 


/* ESERCIZIO EXTRA 3
  Oggi Ã¨ il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function discountBlackFriday(total, discount) {

    // return total - (total / 100 * discount)
   const percentuale = total / 100 * discount 
   return total - percentuale
} 

const discount = 20
const totalBlackFriday = discountBlackFriday(total, discount)
console.log(totalBlackFriday)


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const gender = "male"
// const isMale = (gender === "male") ? true : false ;
const isMale = (gender === "male")
console.log(isMale)


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia Ã¨ multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero Ã¨ multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/


for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + "FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + "Fizz");
         
    } else if (i % 5 === 0) {
        console.log(i + "Buzz");
    }

}
