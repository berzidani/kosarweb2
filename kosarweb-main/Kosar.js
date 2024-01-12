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
    db = Number(prompt('Hány darabot szeretnél?'))
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


var PumaLameloBallOrange = 45000;
var PumaLameloBallToxic = 62000;
var PumaLameloBallChino = 65000;
var AdidasDONIssueBlack = 37000;
var AirJordanLuka2Caves = 60000;
var NikeZoomFreak5Oreo = 49000;
var AirJordanTatum1CoolGrey = 48000;
var AirJordanZion3BlackWhite = 60000;
var AirJordanZion3FreshPaint = 60000;
var NikeKDTrey5XPhantom = 28000;
var NikeGTHustle2Community = 56000;
var NikeZoomGTJump2Black = 88000;
var NikeJa1LightSmokeGrey = 48000;
var NikeKD16BlackVividPurple = 58000;
var NikeLebron21Tahitian = 80000;
var NikeAirMaxImpact4White = 32000;
var NikeZoomLebronNXXTGenWolf = 62000;
var AirJordanOneTake4White = 40000;
var NewBalanceTwoWxyV4Dualism = 60000;
var NikeJa1GuavaIce = 48000;
var NikeKD16EmberGlow = 64000;
var NikeLebron21Akoya = 80000;
var NikeLebron21Conchiolin = 80000;
var NikeZoomGTJump2LtFusionRed = 70000;
var NikeZoomFreak5BlackPurePlatinum = 54000;
var UACurry2Burgundy = 45000;
var NikeLebronNXXTGenLakers = 69000;
var NikeLebronWitnessWhiteMetallicSilver = 46000;
