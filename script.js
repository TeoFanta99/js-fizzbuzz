// STEP 1: SELEZIONE DEL CONTAINER - individuo nell'HTML la classe del container
const container = document.querySelector(".container");


// STEP 2: CICLO FOR - aggiungiamo la possibilità di moltiplicare gli "square"
for (let i = 1; i < 101; i++) {

    // STEP 2.1: VERSIONE INNERHTML - aggiungiamo le istruzioni al nostro ciclo seguendo un approccio InnerHTML

    // Fase 1 - creazione del div
    const square = 
    `<div class="square">
        ${i}
    </div>`;

    // Fase 2 - output in pagina
    container.innerHTML += square;


    // Fase 3 - aggiungere "fizz", "buzz" o "fizzbuz" a seconda del valore di "i"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }


}

// STEP 3: MODIFICA DEL TESTO NEGLI SQUARE - aggiungere "fizz", "buzz" o "fizzbuz" a seconda del valore di "i"

