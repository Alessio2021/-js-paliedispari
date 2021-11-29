// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const evenOdd = prompt('scegli tra pari o dispari');
const number = parseInt(prompt('scegli un numero'));

// Generiamo un numero random(sempre da 1 a 5) per il computer

const numbComputer = Math.round(Math.random() * 5);
console.log(numbComputer);
// Sommiamo i due numeri

const sum = number + numbComputer;

// Stabiliamo se la somma dei due numeri è pari o dispari
let find = false;

if (sum % 2 == 0) {
    find = true
} 

if (find == true) {
    console.log('pari');
} else {
    console.log('dispari');
}

// Dichiariamo chi ha vinto

if (find == true && evenOdd == 'pari' || find == false && evenOdd == 'dispari') {
    console.log('vincitore e l utente');
} else {
    console.log('il vincitore e il pc');
}