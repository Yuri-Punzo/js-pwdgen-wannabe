/* Istruzioni
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22 */



let userName = prompt("Qual'é il tuo nome ?")
let userSurname = prompt("Qual'é il tuo cognome ?")
let userFavoriteColor = prompt("Qual'é il tuo colore preferito ?")


const currentYear = ("2022")
const testo = ("Ecco un\'insicurissima password:")

document.getElementById("unreliable_pswrd").innerHTML = (`${testo} ${userName}${userSurname}${userFavoriteColor}${currentYear}`)