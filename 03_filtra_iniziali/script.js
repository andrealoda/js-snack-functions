/* Scrivi una funzione che accetti un'array di stringhe e una lettera e 
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const initialLetter = 'A';

// Dichiara la funzione qui.
function arrStartsWith(letterOrigin, arrOrigin) {

    const arrFinal = [];

    for (let i = 0; i < arrOrigin.length; i++) {
        const element = arrOrigin[i][0];
        // const element = arrOrigin[i]
        // const intElement = element[0]

       
        
        if (letterOrigin === element) {
            arrFinal.push(arrOrigin[i])
        }
    }

return arrFinal
}


// Invoca la funzione qui e stampa il risultato in console

const result = arrStartsWith(initialLetter, names);

console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


// CORREZIONE