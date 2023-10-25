const inserisciNome = prompt ("Inserisci il tuo nome", "Gennarino");
const inserisciCognome = prompt ("inserisci il tuo cognome", "Gambocchione");
const inserisciColorePreferito = prompt ("Inserisci Colore Preferito", "azzurro");
const password = inserisciNome+ inserisciCognome + inserisciColorePreferito;

document.getElementById("Titolo").innerHTML = "Complimenti, " + inserisciNome;
document.getElementById("Password").innerHTML = "La tua Password è :" + password;