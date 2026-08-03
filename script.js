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

    document.getElementById("nextChapterBtn").style.display = "none";

    startLetter();
}

const lines = [
    "Hey tui... ❤️",
    "Haa... tokei bolchi. 😊",
    "Aj tor Birthday... 🎂",
    "Hoyto vabchis...",
    "Eta sudhu ekta website na...",
    "Eta amar tor jonno banano ekta chotto surprise. 🤍",
    "Tai aste aste por...",
    "Golpota ekhono shesh hoyni... ✨"
];

let line = 0;

function startLetter() {
    line = 0;
    document.getElementById("typewriter").innerHTML = "";
    showNextLine();
}

function showNextLine() {

    if (line >= lines.length) {
        document.getElementById("nextChapterBtn").style.display = "block";
        return;
    }

    let text = lines[line];
    let i = 0;

    let box = document.getElementById("typewriter");

    let typing = setInterval(() => {

        box.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(typing);

            box.innerHTML += "<br><br>";

            line++;

            setTimeout(showNextLine, 1200);

        }

    }, 50);

}

function goToChapter2() {
    alert("🚧 Chapter 2 is coming soon ❤️");
}
