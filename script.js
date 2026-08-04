function hideAllPages() {

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("passwordPage").classList.add("hidden");
    document.getElementById("envelopePage").classList.add("hidden");
    document.getElementById("letterPage").classList.add("hidden");

}


/* Welcome → Password */

function nextPage() {

    hideAllPages();

    document.getElementById("passwordPage").classList.remove("hidden");

}


/* Password → Envelope */

function checkPassword() {

    let pass = document
        .getElementById("password")
        .value
        .toLowerCase()
        .trim();

    if (pass === "favourite chapter") {

        hideAllPages();

        document
            .getElementById("envelopePage")
            .classList.remove("hidden");

    } else {

        alert("Wrong Password 💔");

    }

}


/* Envelope → Letter */

function openEnvelope() {

    hideAllPages();

    document
        .getElementById("letterPage")
        .classList.remove("hidden");

    document
        .getElementById("nextChapterBtn")
        .style.display = "none";

    startLetter();

}


/* Birthday Letter */

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


/* Typewriter */

function showNextLine() {

    if (line >= lines.length) {

        setTimeout(function() {

            document
                .getElementById("nextChapterBtn")
                .style.display = "block";

        }, 500);

        return;
    }


    let text = lines[line];

    let i = 0;

    let box = document.getElementById("typewriter");


    let typing = setInterval(function() {

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


/* Chapter 2 */

function goToChapter2() {

    alert("Chapter 2 is coming soon ❤️");

}


/* Start */

window.onload = function() {

    hideAllPages();

    document
        .getElementById("welcome")
        .classList.remove("hidden");

};
