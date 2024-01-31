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
    } else {
      alert('Érvénytelen szám!');
    }
  }

  function megtalalLegkisebb() {
    var listaElemek = document.getElementById('szamLista').getElementsByTagName('li');
    var legkisebb = Infinity;

    for (var i = 0; i < listaElemek.length; i++) {
      var szam = parseFloat(listaElemek[i].textContent);
      if (!isNaN(szam) && szam < legkisebb) {
        legkisebb = szam;
      }
    }

    if (legkisebb !== Infinity) {
      document.getElementById('legkisebbSzam').textContent = 'Legkisebb szám: ' + legkisebb;
    } else {
      document.getElementById('legkisebbSzam').textContent = 'Nincs megadott szám a listában.';
    }
  }