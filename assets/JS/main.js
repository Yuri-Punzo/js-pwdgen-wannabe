/* Istruzioni
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22 */

alert("Ciao ! Creiamo insieme una password insicura !");

let userName = prompt("Qual'é il tuo nome ?");
let userSurname = prompt("Qual'é il tuo cognome ?");
let userFavoriteColor = prompt("Qual'é il tuo colore preferito ?");


const currentYear = "2022";
const testo = "Ed ecco a te un'insicurissima password:";

document.getElementById("testo").innerHTML = `${testo}`;

document.getElementById("unreliable_pswrd").innerHTML = `${userName}${userSurname}${userFavoriteColor}${currentYear}`;