const GOMBOK = document.getElementById("gombok");
let txt = "<br>";
for (let index = 0; index < 9+1; index++) {
    txt += `<button id="${index}">${index}</button>`
    if (index % 3 == 0) {
        txt += "<br>";
    }
}
/* console.log(txt); */
txt += `<button id="osszead">+</button>
        <button id="kivon">-</button>
        <button id="szorzas">*</button>
        <button id="osztas">/</button>
        <button id="egyenlo">=</button>
        <button id="torles">Clr</button>`;

GOMBOK.innerHTML = txt;
const buttonELEMEK=document.querySelectorAll("button")

/* const EGY = document.getElementById("1");
const KETTO = document.getElementById("2");
const HAROM = document.getElementById("3");
const NEGY = document.getElementById("4");
const OT = document.getElementById("5");
const HAT = document.getElementById("6");
const HET = document.getElementById("7");
const NYOLC = document.getElementById("8");
const KILENC = document.getElementById("9");
const OSSZEAD = document.getElementById("osszead");
const KIVON = document.getElementById("kivon");
const SZORZAS = document.getElementById("szorzas");
const OSZTAS = document.getElementById("osztas");
const TORLES = document.getElementById("torles"); 
*/

const KIJELZO  = document.getElementById("kijelzo");
const MUVELET = KIJELZO.innerHTML;

for (let index = 0; index < buttonELEMEK.length; index++) {
    buttonELEMEK[index].addEventListener("click", function(event){
        KIJELZO.innerHTML += event.target.innerHTML;
    });
}


const EGYNELO = document.getElementById("egyenlo");

EGYNELO.addEventListener("click", function() {
    KIJELZO.innerHTML = eval(KIJELZO.value);
});