function factorielle() {
    let number = 1;
    factorielle = 1;
    number = prompt("De quel nombre veux-tu calculer la factorielle ?");

    for(let count = 1; count <= number; count++){
        factorielle = factorielle * count;
    }
    console.log("Le résultat est :" + factorielle);
    
  }
  
  factorielle();