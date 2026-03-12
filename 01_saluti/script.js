/* Scrivi una funzione che accetti una stringa contenente un nome e 
restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluto(yourName) {
    return 'Ciao ' + yourName
}


// Invoca la funzione qui e stampa il risultato in console

// saluto(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario

console.log(saluto(userName));

// arrow function

// const saluto = yourName => 'Ciao ' + yourName;
// console.log(saluto(userName));

// CORREZIONE

function firstWelcome(inputString) {
    const message = 'Ciao ' + inputString;
    return message;
}

const welcome = fisrtWelcome(userName);