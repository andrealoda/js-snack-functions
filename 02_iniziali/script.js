/* Scrivi una funzione che accetti un array di nomi e 
restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// // Dichiara la funzione qui.
// function arrFinale(arrOrigine) {

//     const arrIniziali = [];

//     for (let i = 0; i < arrOrigine.length; i++) {
//         const element = arrOrigine[i];
//         arrIniziali.push(element[0]);
//     }

//     return arrIniziali;
// }

// // Invoca la funzione qui e stampa il risultato in console

// console.log(arrFinale(names));

// //Risultato atteso: ["A", "L", "M", "A", "G", "A"]



const arrFinale = arrOrigine => {
    const arrIniziali = [];

    for (let i = 0; i < arrOrigine.length; i++) {
        const element = arrOrigine[i];
        arrIniziali.push(element[0]);
    }
    return arrIniziali
}

console.log(arrFinale(names));
