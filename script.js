function showPage(pageId) {

    const pages = [
        "welcome",
        "passwordPage",
        "envelopePage",
        "letterPage"
    ];

    pages.forEach(function(id) {
        const page = document.getElementById(id);

        if (page) {
            page.classList.add("hidden");
        }
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.remove("hidden");
    }
}


/* =========================
   Welcome → Password
========================= */

function nextPage() {

    showPage("passwordPage");

}


/* =========================
   Password Check
========================= */

function checkPassword() {

    const input = document.getElementById("password");

    const pass = input.value.toLowerCase().trim();

    if (pass === "favourite chapter") {

        showPage("envelopePage");

    } else {

        alert("Wrong Password 💔");

        input.value = "";

        input.focus();

    }
}


/* =========================
   Envelope → Letter
========================= */

function openEnvelope() {

    showPage("letterPage");

    const button = document.getElementById("nextChapterBtn");

    button.style.display = "none";

    startLetter();

}


/* =========================
   Birthday Letter
========================= */

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

    const box = document.getElementById("typewriter");

    box.innerHTML = "";

    showNextLine();

}


/* =========================
   Typewriter
========================= */

function showNextLine() {

    if (line >= lines.length) {

        setTimeout(function() {

            const button =
                document.getElementById("nextChapterBtn");

            button.style.display = "block";

            button.style.animation =
                "buttonAppear 1s ease";

        }, 500);

        return;
    }


    const text = lines[line];

    let i = 0;

    const box = document.getElementById("typewriter");


    const typing = setInterval(function() {

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


/* =========================
   Chapter 2
========================= */

function goToChapter2() {

    alert("Chapter 2 is coming soon ❤️");

}


/* =========================
   Start Website
========================= */

document.addEventListener("DOMContentLoaded", function() {

    showPage("welcome");

});
