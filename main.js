
function nevHossz() {
    let nev_value_length = document.getElementById("nev").value.length;
    if (nev_value_length > 20) {
        document.getElementById("nev_hossz").style.color = "red";
        document.getElementById("nev_hossz").innerHTML = nev_value_length;
    }
    else {
        document.getElementById("nev_hossz").style.color = "black";
        document.getElementById("nev_hossz").innerHTML = nev_value_length;
    }
}

function jelszo1Hossz() {
    let jelszo1_value_length = document.getElementById("jelszo1").value.length;
    if (jelszo1_value_length < 8) {
        document.getElementById("jelszo1_hossz").style.color = "red";
        document.getElementById("jelszo1_hossz").innerHTML = jelszo1_value_length;
    }
    else {
        document.getElementById("jelszo1_hossz").style.color = "black";
        document.getElementById("jelszo1_hossz").innerHTML = jelszo1_value_length;
    }
}

function jelszo2Egyforma() {
    let jelszo1_value = document.getElementById("jelszo1").value;
    let jelszo2_value = document.getElementById("jelszo2").value;
    document.getElementById("jelszo2_hiba").style.color = "red";
    if (jelszo1_value !== jelszo2_value) {
        document.getElementById("jelszo2_hiba").style.display = "block";
        document.getElementById("jelszo2_hiba").innerHTML = "A két jelszó nem egyforma!";
    }
    else {
        document.getElementById("jelszo2_hiba").style.display = "none";
    }
}

function validacio() {
    let nev_value_length = document.getElementById("nev").value.length;
    let jelszo1_value_length = document.getElementById("jelszo1").value.length;
    let jelszo1_value = document.getElementById("jelszo1").value;
    let jelszo2_value = document.getElementById("jelszo2").value;
    let hibauzenet = document.getElementById("hibauzenet");
    hibauzenet.style.color = "red";
    hibauzenet.innerHTML = "";

    let sikertelen_db = 0;

    if (nev_value_length > 20) {
        hibauzenet.innerHTML += "A név maximum 20 karakter lehet!<br />";
        sikertelen_db++;
    }
    if (jelszo1_value_length < 8) {
        hibauzenet.innerHTML += "A jelszónak minimum 8 karakternek kell lennie!<br />";
        sikertelen_db++;
    }
    if (jelszo1_value !== jelszo2_value) {
        hibauzenet.innerHTML += "A két jelszó nem egyforma!<br />";
        sikertelen_db++;
    }

    if (sikertelen_db === 0) {
        setTimeout(sikeresKiir, 2000);
    }
}

function sikeresKiir() {
    document.getElementById("sikeres_regisztracio").style.color = "green";
    document.getElementById("sikeres_regisztracio").innerHTML = "Sikeres regisztráció!";
}

function init() {
    document.getElementById("nev").addEventListener("input", nevHossz);
    document.getElementById("jelszo1").addEventListener("input", jelszo1Hossz);
    document.getElementById("jelszo1").addEventListener("change", jelszo2Egyforma);
    document.getElementById("jelszo2").addEventListener("change", jelszo2Egyforma);
    document.getElementById("gomb").addEventListener("click", validacio);
}

document.addEventListener("DOMContentLoaded", init);
