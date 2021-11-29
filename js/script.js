// Chiedere all’utente di inserire una parola
const word = prompt('Inserisci nome')

// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

const wordSplit = word.split('');
// console.log(wordSplit);
const wordReverse = wordSplit.reverse('');
// console.log(wordReverse);
const finalWord = wordReverse.join('');
// console.log(finalWord);

if (word == finalWord) {
    console.log('palindromo');
} else {
    console.log('non palindromo');
}
