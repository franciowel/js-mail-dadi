// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro 
// programma così come lo faremmo "a mano"

// // START

// DATA UNA LISTA DI MAIL
const ServerMail = ['francesco@mail.it', 'lolletto@mail.it','armando@mail.it', 'biondina@mail.it'];
console.log(ServerMail)

// CHIEDIAMO ALL'UTENTE LA SUA MAIL
const CheckButn = document.getElementById('btncheck');
CheckButn.addEventListener('click',
    function() {
        // LEGGERE LA MAIL DELL'UTENTE DA INPUT
        const UserMail = document.getElementById('usermail').value;

        // UNA VOLTA LETTA LA SUA MAIL LE CONFRONTO CON QUELLE DELLA MIA LISTA
        let UserSearch = false;
        for(let i = 0; i < ServerMail.length; i++){
        const YourMail = ServerMail[i];

            if(YourMail === UserMail) {
            UserSearch = true;
            } 
        }

        // UNA VOLTA CONTROLLATA LA LISTA:
        // se non c'è : messaggio file not found
        // se c'è : messaggio di conferma
        if(UserSearch) {
            document.getElementById('adviceuser').innerHTML = UserMail + ' ' + 'è una mail verificata';
            document.getElementById('adviceuser').classList.toggle('active')
        } else {
            document.getElementById('adviceuser').innerHTML = UserMail + ' ' + 'non è una mail verificata. Prova con francesco@mail.it';
            document.getElementById('adviceuser').classList.toggle('error')
        }
    }

)
