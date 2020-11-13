function bibliotheque(){
    
    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented: 33 },
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
      ];
      let all_book_rented = "oui"; 
    let most_rented = 0;
    let less_rented = books[0]['rented'];
    let book_title_2;
    let book_title;
    let find_book = 0;


      for(let i = 0; i < books.length ; i++){

        if (books[i]['rented'] == 0){
            all_book_rented = "non" 
        }
        if (books[i]['rented'] > most_rented){
            most_rented = books[i]['rented'];
            book_title =  books[i]['title'];
            
        }
        if (books[i]['rented'] < less_rented){
            less_rented = books[i]['rented'];
            book_title_2 = books[i]['title'];
        }
        if (books[i]['id'] == 873495){
            find_book = books[i]['title']
        }
        if (books[i]['id'] == 133712){
            books.splice(i)  
        }
 
    }


 

      console.log("Est-ce que tous les livres ont été au moins empruntés une fois ? " + all_book_rented)
      console.log("Quel est livre le plus emprunté ? " + book_title)
      console.log("Quel est le livre le moins emprunté ? " + book_title_2)
      console.log("Trouve le livre avec l'ID: 873495 ==> " + find_book)
      console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé )");


}






bibliotheque();

