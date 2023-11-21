// STEP 1: SELEZIONE DEL CONTAINER - individuo nell'HTML la classe del container
const container = document.querySelector(".container");


// STEP 2: CICLO FOR - utilizzo metodo "append"
for (let i = 1; i < 101; i++) {

    // Step 2.1: creo DIV per lo square
    const square = document.createElement("div");

    // Step 2.2: aggiungo la classe "square"
    square.classList.add("square");

    // Step 2.3: aggiungo il div al container
    container.append(square);


    // Step 2.4: aggiungo le possibili divisioni
    if (i % 3 === 0 && i % 5 === 0) {
        let fizzbuzz = "fizzbuzz";
        console.log(fizzbuzz);

        // aggiungo la classe a "fizzbuzz" a square
        square.classList.add("fizzbuzz")

        // aggiungo l'elemento allo square
        square.append(fizzbuzz);
    }

    else if (i % 5 === 0) {
        let buzz = "buzz";
        console.log(buzz);

        // aggiugno la classe "buzz" a square
        square.classList.add("buzz");

        // aggiungo l'elemento a square
        square.append(buzz);
    }

    else if (i % 3 === 0) {
        let fizz = "fizz";
        console.log(fizz);

        // aggiungiamo la classe "fizz" a square
        square.classList.add("fizz");

        // aggiungiamo l'elemento a square
        square.append(fizz);
    }

    else {
        // semplicemente aggiungiamo "i" allo square
        square.append(i)
    }
}