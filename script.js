const prvi = document.getElementById("prvi");
const drugi = document.getElementById("drugi");
const treci = document.getElementById("treci");
const cetvrti = document.getElementById("cetvrti");
const peti = document.getElementById("peti");
const sesti = document.getElementById("sesti");
const sedmi = document.getElementById("sedmi");
const osmi = document.getElementById("osmi");
const deveti = document.getElementById("deveti");
const nulti = document.getElementById("nulti");
const tacka = document.getElementById("tacka");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const puta = document.getElementById("puta");
const podeljeno = document.getElementById("podeljeno");
const jednako = document.getElementById("equally");
const display = document.getElementById("display");
const cDugme = document.getElementById("cDugme");
const del = document.getElementById("del");

let kliknutiBroj = 0;
let niz = [];
let sabiranje = false;
let oduzimanje = false;
let mnozenje = false;
let deljenje = false;
let jednakoJednom = false;
let jednakoDvaput = false;
let tackaDvaput = false;
let brisanje = false;
let dodavanje = 0;
let nizDel = [];
nizDel.push(kliknutiBroj);

//Pritisni broj:

prvi.addEventListener("click", prviBroj);
function prviBroj() {
  kliknutiBroj += prvi.value;
  if (kliknutiBroj > Number(11111111111111)) {
    kliknutiBroj = 111111111111111;
  }
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

drugi.addEventListener("click", drugiBroj);
function drugiBroj() {
  kliknutiBroj += drugi.value;
  if (kliknutiBroj > Number(2222222222222)) {
    kliknutiBroj = 2222222222222;
  }
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

treci.addEventListener("click", treciBroj);
function treciBroj() {
  kliknutiBroj += treci.value;
  if (kliknutiBroj > Number(3333333333333)) {
    kliknutiBroj = 3333333333333;
  }
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

cetvrti.addEventListener("click", cetvrtiBroj);
function cetvrtiBroj() {
  kliknutiBroj += cetvrti.value;
  if (kliknutiBroj > Number(4444444444444)) {
    kliknutiBroj = 4444444444444;
  }
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

peti.addEventListener("click", petiBroj);
function petiBroj() {
  kliknutiBroj += peti.value;
  if (kliknutiBroj > Number(5555555555555)) {
    kliknutiBroj = 5555555555555;
  }
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

sesti.addEventListener("click", sestiBroj);
function sestiBroj() {
  kliknutiBroj += sesti.value;
  if (kliknutiBroj > Number(6666666666666)) {
    kliknutiBroj = 6666666666666;
  }
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

sedmi.addEventListener("click", sedmiBroj);
function sedmiBroj() {
  kliknutiBroj += sedmi.value;
  if (kliknutiBroj > Number(7777777777777)) {
    kliknutiBroj = 7777777777777;
  }
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

osmi.addEventListener("click", osmiBroj);
function osmiBroj() {
  kliknutiBroj += osmi.value;
  if (kliknutiBroj > Number(8888888888888)) {
    kliknutiBroj = 8888888888888;
  }
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

deveti.addEventListener("click", devetiBroj);
function devetiBroj() {
  kliknutiBroj += deveti.value;
  if (kliknutiBroj > Number(9999999999999)) {
    kliknutiBroj = 9999999999999;
  }
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

nulti.addEventListener("click", nultiBroj);
function nultiBroj() {
  kliknutiBroj += nulti.value;
  display.innerText = Number(kliknutiBroj);
  nizDel.push(kliknutiBroj);
}

tacka.addEventListener("click", tackaBroj);
function tackaBroj() {
  if (!kliknutiBroj.includes(".")) {
    kliknutiBroj += tacka.value;
    let tackaNiz = [];
    tackaNiz.push(kliknutiBroj);
    console.log(tackaNiz);
    if (tackaDvaput === true) {
    } else {
      display.innerText = Number(kliknutiBroj);
      nizDel.push(kliknutiBroj);
      tackaDvaput = true;
    }
  }
}

del.addEventListener("click", izbrisi);
function izbrisi() {
  brisanje = true;
  kliknutiBroj = nizDel[nizDel.length - 2];
  console.log(kliknutiBroj);

  if (jednakoJednom === true) {
  }
  if (kliknutiBroj === undefined) {
    kliknutiBroj = 0;
  }
  nizDel.pop();
  display.innerText = Number(kliknutiBroj);
  if (nizDel.length === 0) {
    display.innerText = 0;
  }
}

// Operacije sa brojevima:

// Sabiranje
plus.addEventListener("click", pokreniPlus);
function pokreniPlus() {
  jednakoDvaput = false;
  sabiranje = true;
  niz.push(Number(kliknutiBroj));
  console.log(niz);
  nizDel = [];

  if (niz[1] === 0) {
    niz.pop();
  }
  if (niz.length === 2 && oduzimanje === true && sabiranje === true) {
    dodavanje = niz[0] - niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    sabiranje = false;
  }
  if (
    niz.length === 2 &&
    oduzimanje === false &&
    sabiranje === true &&
    deljenje === false &&
    mnozenje === false
  ) {
    dodavanje = niz[0] + niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    sabiranje = false;
  }
  if (niz.length === 2 && mnozenje === true) {
    dodavanje = niz[0] * niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    mnozenje = false;
  }
  if (niz.length === 2 && deljenje === true) {
    dodavanje = niz[0] / niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    deljenje = false;
  }
  kliknutiBroj = 0;
  sabiranje = true;
  oduzimanje = false;
  mnozenje = false;
  deljenje = false;
}

// Oduzimanje
minus.addEventListener("click", pokreniMinus);
function pokreniMinus() {
  jednakoDvaput = false;
  oduzimanje = true;
  niz.push(Number(kliknutiBroj));
  nizDel = [];
  if (niz[1] === 0) {
    niz.pop();
  }
  if (niz.length === 2 && oduzimanje === true && sabiranje === true) {
    dodavanje = niz[0] + niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    oduzimanje = false;
  }
  if (
    niz.length === 2 &&
    oduzimanje === true &&
    sabiranje === false &&
    deljenje === false &&
    mnozenje === false
  ) {
    dodavanje = niz[0] - niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    oduzimanje = false;
  }
  if (niz.length === 2 && mnozenje === true) {
    dodavanje = niz[0] * niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    mnozenje = false;
  }
  if (niz.length === 2 && deljenje === true) {
    dodavanje = niz[0] / niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    deljenje = false;
  }
  kliknutiBroj = 0;
  sabiranje = false;
  oduzimanje = true;
  mnozenje = false;
  deljenje = false;
}

// Mnozenje

puta.addEventListener("click", pokreniMnozenje);
function pokreniMnozenje() {
  jednakoDvaput = false;
  niz.push(Number(kliknutiBroj));
  nizDel = [];
  if (niz[1] === 0) {
    niz.pop();
  }
  if (niz.length === 2 && sabiranje === true) {
    dodavanje = niz[0] + niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    sabiranje = false;
  }
  if (niz.length === 2 && oduzimanje === true) {
    dodavanje = niz[0] - niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    oduzimanje = false;
  }
  if (niz.length === 2 && mnozenje === true) {
    dodavanje = niz[0] * niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    mnozenje = false;
  }
  if (niz.length === 2 && deljenje === true) {
    dodavanje = niz[0] / niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    deljenje = false;
  }
  kliknutiBroj = 0;
  sabiranje = false;
  oduzimanje = false;
  mnozenje = true;
  deljenje = false;
}

// Deljenje

podeljeno.addEventListener("click", pokreniDeljenje);
function pokreniDeljenje() {
  jednakoDvaput = false;
  niz.push(Number(kliknutiBroj));
  nizDel = [];
  if (niz[1] === 0) {
    niz.pop();
  }
  if (niz.length === 2 && sabiranje === true) {
    dodavanje = niz[0] + niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    sabiranje = false;
  }
  if (niz.length === 2 && oduzimanje === true) {
    dodavanje = niz[0] - niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    oduzimanje = false;
  }
  if (niz.length === 2 && mnozenje === true) {
    dodavanje = niz[0] * niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    mnozenje = false;
  }
  if (niz.length === 2 && deljenje === true) {
    dodavanje = niz[0] / niz[1];
    niz = [];
    niz.push(dodavanje);
    display.innerText = Number(dodavanje.toFixed(12));
    deljenje = false;
  }
  kliknutiBroj = 0;
  sabiranje = false;
  oduzimanje = false;
  mnozenje = false;
  deljenje = true;
}

// C dugme

cDugme.addEventListener("click", vratiNulu);
function vratiNulu() {
  display.innerText = 0;
  niz = [];
  kliknutiBroj = 0;
  let sabiranje = false;
  let oduzimanje = false;
  let mnozenje = false;
  let deljenje = false;
  nizDel = [];
}

// Jednako:

jednako.addEventListener("click", izracunaj);
function izracunaj() {
  niz.push(Number(kliknutiBroj));

  kliknutiBroj = 0;
  let racunaj = niz.splice(0, 2);
  if (sabiranje === true) {
    let resenje = racunaj[0] + racunaj[1];
    niz.push(resenje);
    display.innerText = Number(resenje.toFixed(12));
    if (jednakoDvaput === true) {
      display.innerText = Number(resenje.toFixed(12));
    }
    jednakoDvaput = true;
  }
  if (oduzimanje === true) {
    let resenje = racunaj[0] - racunaj[1];
    display.innerText = Number(resenje.toFixed(12));
    niz.push(resenje);
    if (jednakoDvaput === true) {
      display.innerText = Number(resenje.toFixed(12));
    }
    jednakoDvaput = true;
  }
  if (mnozenje === true) {
    if (jednakoDvaput === true) {
      let resenje = racunaj[0] + racunaj[1];
      niz.push(resenje);
      display.innerText = Number(resenje.toFixed(12));
    } else {
      let resenje = racunaj[0] * racunaj[1];
      display.innerText = Number(resenje.toFixed(12));
      niz.push(resenje);
    }
    jednakoDvaput = true;
  }
  if (deljenje === true) {
    if (jednakoDvaput === true && niz.length === 0) {
      let resenje = racunaj[0] - racunaj[1];
      niz.push(resenje);
      display.innerText = Number(resenje.toFixed(11));
    } else {
      let resenje = racunaj[0] / racunaj[1];
      display.innerText = Number(resenje.toFixed(11));
      niz.push(resenje);
      // kliknutiBroj = resenje;
    }

    jednakoDvaput = true;
  }
  jednakoJednom = true;
}
