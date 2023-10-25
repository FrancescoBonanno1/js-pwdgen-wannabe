const inserisciNome = prompt ("Inserisci il tuo nome", "Mario");
const inserisciCognome = prompt ("inserisci il tuo cognome", "Rossi");
const inserisciColorePreferito = prompt ("Inserisci Colore Preferito", "Magenta");
let randomNumber = Math.floor (Math.random ()*100)
const password = inserisciNome + inserisciCognome + inserisciColorePreferito + randomNumber;

document.getElementById("Titolo").innerHTML = "Complimenti, " + inserisciNome + "!";
document.getElementById("Password").innerHTML = "La tua Password è :" + password;