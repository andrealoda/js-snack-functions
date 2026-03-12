/* Scrivi una funzione che accetti una stringa e 
restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelsReturn(startWord) {
    const vowels = 'aeiouy';
    let result = 0;
    const foundVowel = [];

    for (let i = 0; i < startWord.length; i++) {
        let currentLetter = startWord[i];
        if (vowels.includes(currentLetter)) {
            result++;
            foundVowel.push(currentLetter);
        }
    }

    return result;
}



// Invoca la funzione qui e stampa il risultato in console
let result = vowelsReturn(word);

console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)


// CORREZIONE LIVE








