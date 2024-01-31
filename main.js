function beolvasSzam() {

    //Grafikus felületű alkalmazás esetén a bevitel alá megfelelő elembe (bekezdés, label, stb.) írd ki a számokat hozzáadás után
    //Hozzáadás után írd ki a lista elemeit vesszővel elválasztva
    var szamErtek = document.getElementById('szam').value;

    if (!isNaN(szamErtek)) {
      // Lista elem létrehozása és hozzáadása a listához
      var listaElem = document.createElement('li');
      listaElem.textContent = szamErtek;

      var lista = document.getElementById('szamokLista');

      // Ellenőrzés, hogy már van-e lista a HTML-ben
      if (!document.getElementById('szamLista')) {
        // Ha nincs, akkor létrehoz egy listát
        var szamLista = document.createElement('ul');
        szamLista.setAttribute('id', 'szamLista');
        document.body.appendChild(szamLista);
      }

      // Hozzáadás az előre létrehozott listához
      document.getElementById('szamLista').appendChild(listaElem);
      
      // Üresre állítja a bemeneti mezőt
      document.getElementById('szam').value = '';
    } else {
      alert('Érvénytelen szám!');
    }

    console.log(szamErtek);
  }
    
  