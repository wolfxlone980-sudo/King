function nextPage() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("passwordPage").style.display = "flex";
}

function checkPassword() {
    let pass = document.getElementById("password").value.toLowerCase().trim();

    if (pass === "favourite chapter") {
        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("envelopePage").style.display = "flex";
    } else {
        alert("Wrong Password 💔");
    }
}

function openEnvelope() {
    document.getElementById("envelopePage").style.display = "none";
    document.getElementById("letterPage").style.display = "flex";
    startLetter();
}

const lines = [
    "Hey tui... ❤️",
    "Haa... tokei bolchi. 😊",
    "Aj tor Birthday... 🎂",
    "Hoyto vabchis...",
    "Eta sudhu ekta website...",
    "But trust me...",
    "Eta ami sudhu tor jonnoi baniyechi. ❤️"
];

let line = 0;

function startLetter() {
    line = 0;
    document.getElementById("typewriter").innerHTML = "";
    showNextLine();
}

function showNextLine() {
    if (line >= lines.length) return;

    document.getElementById("typewriter").innerHTML += lines[line] + "<br><br>";
    line++;

    setTimeout(showNextLine, 1800);
}
