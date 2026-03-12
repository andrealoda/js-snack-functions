/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// const d = new Date();

// Dichiara la funzione qui.

function salutations(yourName) {

    // const hour = d.getHours();
    const hour = new Date().getHours();

    let saluto;

    if (hour <= 13) {
        saluto = ('Buongiorno' + yourName);
    } else if (hour <= 17) {
        saluto = ('Buon pomeriggio' + yourName);
    } else {
        saluto = ('Buonasera ' + yourName);
    }

    return saluto;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(salutations(d, name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


// CORREZIONE LIVE


