var szamok = []; // Tárolja a hozzáadott számokat

    function beolvasSzam() {
      var szamErtek = document.getElementById('szam').value;

      if (!isNaN(szamErtek)) {
        var listaElem = document.createElement('li');
        listaElem.textContent = szamErtek;

        var lista = document.getElementById('szamokLista');

        if (!document.getElementById('szamLista')) {
          var szamLista = document.createElement('ul');
          szamLista.setAttribute('id', 'szamLista');
          document.body.appendChild(szamLista);
        }

        document.getElementById('szamLista').appendChild(listaElem);
        document.getElementById('szam').value = '';

        // Hozzáadja a számot a tárolóhoz
        szamok.push(parseFloat(szamErtek));
      } else {
        alert('Érvénytelen szám!');
      }
    }

    function megkeresLegnagyobb() {
      var maxSzamElem = document.getElementById('maxSzam');

      if (szamok.length > 0) {
        var maxSzam = Math.max(...szamok);
        maxSzamElem.textContent = 'Maximum szám: ' + maxSzam;
      } else {
        maxSzamElem.textContent = 'Nincs még hozzáadott szám';
      }
    }