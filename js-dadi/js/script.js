// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro 
// programma così come lo faremmo "a mano"

// // START

// COSTRUIAMO IL DADO CONSIDERANDO CHE HA 6 FACCE
const MyDice = Math.floor(Math.random() * 6) + 1 ;
const VirtualDice = Math.floor(Math.random() * 6) + 1 

// LANCIAMO IL DADO, IO E IL PC
const diceButn = document.getElementById('dice-btn');
diceButn.addEventListener('click',
function() {
    document.getElementById('my-dice').innerHTML = MyDice;
    document.getElementById('pc-dice').innerHTML = VirtualDice;

    if(MyDice === VirtualDice) {
        document.getElementById('your-result').innerHTML = 'pareggio, ritenta..';
    } else if (MyDice < VirtualDice) {
        document.getElementById('your-result').innerHTML = 'il computer vince';
    } else (MyDice > VirtualDice); {
        document.getElementById('your-result').innerHTML = 'il tuo numero vince';
    }
}

)

