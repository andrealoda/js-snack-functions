/* Scrivi una funzione che accetti un'array di stringhe e una lettera e 
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const initialLetter = 'A';

// Dichiara la funzione qui.
function arrStartsWith(letterOrigin, arrOrigin) {

    const arrFinal = [];

    for (let i = 0; i < arrOrigin.length; i++) {
        const element = arrOrigin[i][0]
        
        if (letterOrigin === element) {
            arrFinal.push(arrOrigin[i])
        }
    }

return arrFinal
}


// Invoca la funzione qui e stampa il risultato in console

console.log(arrStartsWith(initialLetter, names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]



/*
se il primo elemento di ogni elemento dell'array
è uguale
alla lettera scelta
allora
salva l'elemento dell'array
in un nuovo array

for (let i = 0; i < arrOrigin.length; i++) {
const element = arrOrigin[i][0]
const arrFinal = [];

    if (initialLetter === element {
    arrFinal.push(element)
    }

}

*/