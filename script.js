const inserisciNome = prompt ("Inserisci il tuo nome", "Mario");
const inserisciCognome = prompt ("inserisci il tuo cognome", "Rossi");
const inserisciColorePreferito = prompt ("Inserisci Colore Preferito", "Magenta");
const password = inserisciNome + inserisciCognome + inserisciColorePreferito + "#39";

document.getElementById("Titolo").innerHTML = "Complimenti, " + inserisciNome;
document.getElementById("Password").innerHTML = "La tua Password è :" + password;