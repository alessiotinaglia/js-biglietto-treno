"use String"

// l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// Posta la domanda quanti km e l'età 
const input = prompt("Inserisci il numero di km che vuoi effettuare e la tua età, separati da una virgola (es: 100, 30):");
console.log(input);

// Convertito le stringhe in numeri 
const [km, eta] = input.split(",").map(Number);

// Visualizza i km e l'età con descrizioni
console.log(`Km che vuoi percorrere: (${km}) e anni di età (${eta}).`);

// Prezzo al chilometro


// Calcolo prezzo totale e il prezzo finale con i vari sconti del 20% e del 40%


// Applicazione sconti 


// Prezzo finale con massimo due decimali

