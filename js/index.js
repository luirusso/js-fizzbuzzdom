/**
 * Consegna:
Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (vedi grafica allegata).
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
 */

const boxes = document.querySelector('.boxes');

for (let i = 1; i <= 100; i++) {

    //detect values divisble by 3 and 5
    if(i % 3 === 0 && i % 5 === 0) {
        boxes.innerHTML += `<div class="box box-divisible_3_5">fizzbuzz</div>`
    }
    //detect values divisible by 3
    else if(i % 3 === 0) {
        boxes.innerHTML += `<div class="box box-divisible_3">fizz</div>`
    }
    //detect values divisible by 5
    else if(i % 5 === 0) {
        boxes.innerHTML += `<div class="box box-divisible_5">buzz</div>`
    }
    else {
        boxes.innerHTML += `<div class="box box-${i}">${i}</div>`;
    }
}