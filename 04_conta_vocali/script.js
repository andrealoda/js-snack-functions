/* Scrivi una funzione che accetti una stringa e 
restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelsReturn(startWord) {
    const vowels = 'aeiouy';
    let result = 0;
    const foundVowel = [];

    for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        if (vowels.includes(currentLetter)) {
            result++;
            foundVowel.push(currentLetter);
        }
    }

    return result, foundVowel;
}



// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsReturn(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)











