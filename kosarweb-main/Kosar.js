var felhasznalonev = localStorage.getItem('felhasznalo'); var jelszo = localStorage.getItem('jelszo'); var bej = localStorage.getItem('Bejelenetkezve')

if (felhasznalonev != null && jelszo != null && bej != null) {
    sessionStorage.setItem('felhasznalo', felhasznalonev)
    sessionStorage.setItem('jelszo', jelszo)
    sessionStorage.setItem('Bejelenetkezve', bej)
}

function torleees() {
    localStorage.removeItem('felhasznalo'); localStorage.removeItem('jelszo'); localStorage.removeItem('Bejelenetkezve')
}

function kosarba(termek) {
    db = Number(prompt('Hány darabot akarsz?'))
    localStorage.setItem(termek, db)
}

function torles() {
    localStorage.clear()
}

function kosar() {
    var list = "<thead><tr><th>Termék neve</th><th class='td-qty'>Darabszám</th><th>Ár</th><th>Törlés</th> </tr> </thead>\n"




    var ossz = 0;
    var darab = 0;
    var key = "";


    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        darab = parseInt(localStorage.getItem(key));
        list += "<tr><td class='adatok'>" + key + "</td><td class='adatok'>" + darab + "</td>" + "</td><td class='adatok'>" + (window[key] * darab) + " Ft" + "</td><td>" + "<button class='gomb' style=\"width:80%; background-color:red\" onclick='RemoveItem(\"" + key + "\")'>Törlés</button>" + "</td></tr>";

        ossz += window[key] * darab;
    }

    list += "<tr><td colspan='3' align='right'>Összesen:</td><td class='total' colspan='2'><b>" +  ossz + ' Ft' + "</b></td></tr>"

    document.getElementById('table').innerHTML = list
    document.getElementById('table').style.display = 'table'

}

function RemoveItem(item) {
    localStorage.removeItem(item)
    alert('Sikeresen törölted!')
    location.reload()
}


function nincs(){
    alert('Jelenleg ebből a termékből nincs elérhető darab')
}