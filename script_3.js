function pyramide(){
    let etage;
    let count = 1;
    let a = " ";
    let d = "#";

    etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    
        for (let espace = etage; espace > 0; espace-- ){
            console.log((a.repeat(espace))+(d.repeat(count)))
            count++
        }
    

}

pyramide();

