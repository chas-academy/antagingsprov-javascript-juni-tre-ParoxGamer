

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument


    function sort(nummer) {
        for (let i = 0; i < nummer.length; i++) {
            if (nummer[i] % 2 === 0){
                console.log(nummer[i] + " jämt");
            } else {
                console.log(nummer[i] + " udda");

            }
        }
    }

    sort ([2, 5, 10, 16, 3, 8, 6, 15]);
    
}

module.exports = { uppg9 };
