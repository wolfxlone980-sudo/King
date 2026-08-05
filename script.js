/* =========================
   HIDE ALL PAGES
========================= */

function hideAllPages() {

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("passwordPage").classList.add("hidden");
    document.getElementById("envelopePage").classList.add("hidden");
    document.getElementById("letterPage").classList.add("hidden");
    document.getElementById("chapter2").classList.add("hidden");
    document.getElementById("chapter3").classList.add("hidden");
    document.getElementById("finalChapter").classList.add("hidden");
    document.getElementById("birthdayReveal").classList.add("hidden");
    document.getElementById("ultimateEnding").classList.add("hidden");

}


/* =========================
   WELCOME → PASSWORD
========================= */

function nextPage() {

    hideAllPages();

    document
        .getElementById("passwordPage")
        .classList.remove("hidden");

}


/* =========================
   PASSWORD → ENVELOPE
========================= */

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


/* =========================
   ENVELOPE → CHAPTER 1
========================= */

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


/* =========================
   CHAPTER 1
========================= */

const lines = [

    "Hey tui... ❤️,

    "Haa... tokei bolchi. 😊",

    "Hoyto vabchis...",

    "Eta sudhu ekta website... na",

    "Eta amar tor jonno banano ekta chutto surprise. 🤍",

    "so aste aste por...",

    "Golpota ekhono shesh hoyni... ✨"

];

let line = 0;


function startLetter() {

    line = 0;

    document
        .getElementById("typewriter")
        .innerHTML = "";

    showNextLine();

}


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

    let box =
        document.getElementById("typewriter");


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


/* =========================
   CHAPTER 1 → CHAPTER 2
========================= */

function goToChapter2() {

    hideAllPages();

    document
        .getElementById("chapter2")
        .classList.remove("hidden");

    startChapter2();

}


/* =========================
   CHAPTER 2
========================= */

const chapter2Lines = [

    "Our story didn't really start with a beautiful moment... 🤍",

    "বরং শুরুটা হয়েছিল একটা classroom-এ... আর একটা ছোট্ট ঝগড়া দিয়ে। 😬",

    "সেদিন কে জানত, ওই মানুষটার সাথেই একদিন এত কথা জমে থাকবে... এত memories তৈরি হবে।",

    "At that time, we weren't even close... সত্যি বলতে, friend বললেও হয়তো একটু বেশি বলা হয়ে যেত।",

    "Then came 28 November 2023... ✨",

    "একটা simple video-তে তোর একটা comment... আর somehow, সেখান থেকেই আবার আমাদের কথা শুরু হলো।",

    "কথা বলতে বলতে একসময় তুই আমাকে তোর number দিতে চাইলি।",

    "But TikTok-এর privacy তখন আমাদের একটু পরীক্ষা নিতে চেয়েছিল। 😭😂",

    "তাই numberটা সরাসরি দেখাতে না পেরে তুই যেভাবে দিলি...",

    "\"zero one seven\" 😁",

    "সত্যি বলছি, তোর ওই বুদ্ধি দেখে আমি সেদিন একটু অবাকই হয়েছিলাম। 😂❤️",

    "তারপর... একটার পর একটা দিন চলে গেল।",

    "কথা বাড়তে থাকল, রাতগুলো একটু একটু করে ছোট হতে থাকল... আর অজান্তেই তুই হয়ে উঠলি আমার পরিচিত মানুষগুলোর মধ্যে একটু আলাদা একজন।",

    "But then... 27 April 2024. 💔",

    "হঠাৎ করেই তুই হারিয়ে গেলি।",

    "কোনো proper goodbye ছিল না... কোনো explanation-ও না।",

    "আমি তোকে খুঁজেছি... কিন্তু কোথাও পেলাম না।",

    "সময় চলে গেল। Days became months... আর আমি ভেবেছিলাম, হয়তো গল্পটা এখানেই শেষ।",

    "But some stories don't end when we think they do...",

    "Because then came 2 June 2025. ✨",

    "একদিন হঠাৎ... an unknown number থেকে একটা message এলো।",

    "আর message-এর ওপাশে ছিলি... তুই। ❤️",

    "কী অদ্ভুত না? এতদিন পরেও somehow, we found our way back to each other.",

    "তারপর থেকে আবার কথা... আবার সেই পরিচিত feeling... আর এবার গল্পটা আর হারিয়ে যায়নি।",

    "Maybe that's what makes our story a little different...",

    "কিছু মানুষ জীবনে আসে খুব quietly...",

    "কিছুদিন থাকে... তারপর হারিয়ে যায়...",

    "কিন্তু যদি তারা সত্যিই important হয়, somehow life তাদের আবার ফিরিয়ে আনে। 🤍",

    "And maybe... that's exactly what happened with us.",

    "কিন্তু জানিস তো... এই গল্পটা এখানেও শেষ হয়নি।",

    "Because the best part of our story... is still being written. ❤️"

];

let chapter2Line = 0;


function startChapter2() {

    chapter2Line = 0;

    document
        .getElementById("chapter2Story")
        .innerHTML = "";

    showChapter2Line();

}


function showChapter2Line() {

    const box =
        document.getElementById("chapter2Story");

    const btn =
        document.getElementById("chapter2NextBtn");


    if (chapter2Line >= chapter2Lines.length) {

        btn.innerHTML =
            "📖 Continue to Chapter 3";

        btn.style.display =
            "inline-block";

        btn.onclick =
            goToChapter3;

        return;

    }


    let text =
        chapter2Lines[chapter2Line];


    let specialClass = "";


    if (text.includes("28 November 2023")) {

        specialClass = "dateMoment";

    }


    if (text.includes("27 April 2024")) {

        specialClass = "sadMoment";

    }


    if (text.includes("2 June 2025")) {

        specialClass = "returnMoment";

    }


    box.innerHTML = `
        <div class="chapterStoryText ${specialClass}"></div>
    `;


    const textBox =
        box.querySelector(".chapterStoryText");


    let i = 0;

    btn.style.display =
        "none";


    let typing =
        setInterval(function() {

            textBox.innerHTML +=
                text.charAt(i);

            i++;


            if (i >= text.length) {

                clearInterval(typing);

                chapter2Line++;

                btn.innerHTML =
                    "Continue ✨";

                btn.style.display =
                    "inline-block";

                btn.onclick =
                    showChapter2Line;

            }

        }, 45);

}


/* =========================
   CHAPTER 2 → CHAPTER 3
========================= */

function goToChapter3() {

    hideAllPages();

    document
        .getElementById("chapter3")
        .classList.remove("hidden");

    startChapter3();

}


/* =========================
   CHAPTER 3
========================= */

const chapter3Lines = [

    "At first, everything was pretty simple... 😊",

    "আমি একটু বেশি fun করতাম, আর তুইও সেগুলো equally enjoy করতি।",

    "তারপর কখন যে আমরা এতটা close হয়ে গেলাম... honestly, I didn't even notice. 🤍",

    "কিছু রাত তো এমনও গেছে—9টা-10টায় কথা শুরু করে কখন যে সকাল 5টা-6টা বেজে গেছে, বুঝতেই পারিনি। 🌙",

    "সবচেয়ে অবাক করার বিষয়... এতক্ষণ কথা বলার পরেও আমাদের কথা যেন কখনো শেষ হতো না।",

    "আর তোর ওই জেদটা... 😑❤️",

    "মাঝে মাঝে সত্যিই বিরক্ত করতি, but somehow... that stubborn little side of you became one of my favourite things. 😂",

    "কিন্তু জানিস...",

    "ঠিক কখন তুই আমার কাছে এতটা important হয়ে গেলি, সেটা আমি নিজেও বুঝতে পারিনি।",

    "কোনো particular moment ছিল না... কোনো special day-ও না।",

    "Maybe it happened somewhere between all those random talks, stupid jokes, little arguments and endless nights...",

    "কখন যে 'তুই' শুধু একজন মানুষ না হয়ে আমার favourite person হয়ে গেলি... I just didn't notice. 🤍",

    "And maybe... that's the part I never really said. ❤️"

];

let chapter3Line = 0;


function startChapter3() {

    chapter3Line = 0;

    document
        .getElementById("chapter3Story")
        .innerHTML = "";

    document
        .getElementById("chapter3NextBtn")
        .style.display = "none";

    showNextChapter3Line();

}


function showNextChapter3Line() {

    const box =
        document.getElementById("chapter3Story");

    const btn =
        document.getElementById("chapter3NextBtn");


    if (chapter3Line >= chapter3Lines.length) {

        btn.innerHTML =
            "💌 Continue to Final Chapter";

        btn.style.display =
            "inline-block";

        btn.onclick =
            goToFinalChapter;

        return;

    }


    let text =
        chapter3Lines[chapter3Line];


    let i = 0;

    box.innerHTML = "";

    btn.style.display =
        "none";


    let typing =
        setInterval(function() {

            box.innerHTML +=
                text.charAt(i);

            i++;


            if (i >= text.length) {

                clearInterval(typing);

                chapter3Line++;

                btn.innerHTML =
                    "Continue ✨";

                btn.style.display =
                    "inline-block";

                btn.onclick =
                    showNextChapter3Line;

            }

        }, 45);

}


/* =========================
   CHAPTER 3 → FINAL
========================= */

function goToFinalChapter() {

    hideAllPages();

    const finalPage =
        document.getElementById("finalChapter");

    finalPage.classList.remove("hidden");

    finalPage.style.display =
        "flex";

}

/* =========================
   FINAL CHAPTER EXPERIENCE
========================= */
const birthdayLines = [

    "আজকের দিনটা শুধু একটা date না... 🤍",

    "আজ এমন একজন মানুষের birthday, যে somehow আমার গল্পের একটা খুব special part হয়ে গেছে। ❤️",

    "তোর জন্য আমার একটাই wish—",

    "তুই সবসময় হাসিস, happy থাকিস, আর তোর ছোট-বড় সব dream একদিন সত্যি হোক। ✨",

    "আর জীবন তোকে যত দূরেই নিয়ে যাক... তোর এই সুন্দর হাসিটা যেন কখনো হারিয়ে না যায়। 🤍"

];

let birthdayLine = 0;
let birthdayTyping = null;


/* =========================
   OPEN FINAL SURPRISE
========================= */

function openFinalSurprise() {

    document
        .getElementById("birthdayReveal")
        .classList.add("hidden");

    document
        .getElementById("celebrationScene")
        .classList.remove("hidden");

}

/* =========================
   TYPE ONE LINE
========================= */

function showBirthdayLine() {

    const box =
        document.getElementById("birthdayMessage");

    const btn =
        document.getElementById("oneMoreBtn");


    /* All lines finished */

    if (birthdayLine >= birthdayLines.length) {

        btn.innerHTML = "✨ Continue";

        btn.style.display = "inline-block";

        btn.onclick = showFinalMessage;

        return;

    }


    /* Clear previous sentence */

    box.innerHTML = "";

    btn.style.display = "none";


    let text =
        birthdayLines[birthdayLine];

    let i = 0;


    /* Typewriter */

    birthdayTyping =
        setInterval(function() {

            box.innerHTML += text.charAt(i);

            i++;


            if (i >= text.length) {

                clearInterval(birthdayTyping);

                birthdayTyping = null;

                birthdayLine++;

                /*
                   IMPORTANT:
                   এখানে আর automatic
                   next sentence আসবে না।

                   User নিজে Continue চাপবে।
                */

                btn.innerHTML =
                    "Continue ✨";

                btn.style.display =
                    "inline-block";

                btn.onclick =
                    showBirthdayLine;

            }

        }, 45);

}


/* =========================
   FINAL MESSAGE
========================= */

function showFinalMessage() {

    document
        .getElementById("birthdayReveal")
        .classList.add("hidden");

    const ending =
        document.getElementById("ultimateEnding");

    ending.classList.remove("hidden");

    ending.style.display = "flex";


    const box =
        document.getElementById("ultimateText");


    box.innerHTML = `

Happy Birthday, Suma. 🎂❤️

তোর জন্য আমার একটাই wish—

তুই সবসময় হাসিস,
নিজের মতো থাকিস,
আর তোর ছোট-বড় সব dream
একদিন সত্যি হোক। 🤍

আর আমাদের এই অদ্ভুত,
সুন্দর গল্পটা...

এভাবেই যেন
আরও অনেক সুন্দর chapter পায়। ❤️

— From someone who's really glad
you found your way back.

    `;

}
      
