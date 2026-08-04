
function hideAllPages() {

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("passwordPage").classList.add("hidden");
    document.getElementById("envelopePage").classList.add("hidden");
    document.getElementById("letterPage").classList.add("hidden");
    document.getElementById("chapter2").classList.add("hidden");

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


/* Start Letter */

function startLetter() {

    line = 0;

    document
        .getElementById("typewriter")
        .innerHTML = "";

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

    hideAllPages();

    document
        .getElementById("chapter2")
        .classList.remove("hidden");

}


/* Start Website */

window.addEventListener("load", function() {

    hideAllPages();

    document
        .getElementById("welcome")
        .classList.remove("hidden");

});
// =========================
// CHAPTER 2 STORY
// =========================

const chapter2Lines = [

    "Our story didn't really start with a beautiful moment... 🤍",

    "বরং শুরু হয়েছিল একটা classroom আর একটা ছোট্ট ঝগড়া দিয়ে। 😬",

    "সেদিন হয়তো ভাবিনি, এই মানুষটাই একদিন আমার জীবনের এতটা কাছের একজন হয়ে যাবে।",

    "তখন আমরা খুব close ছিলাম না... friend বললেও হয়তো একটু বেশি বলা হয়ে যেত।",

    "Then came 28 November 2023... ✨",

    "একটা simple video... একটা comment... আর সেখান থেকেই আবার শুরু হলো কথা বলা।",

    "তারপর একদিন সে আমাকে তার number দিতে চাইল।",

    "But TikTok had other plans! 😭😂",

    "তাই privacy-এর কারণে number সরাসরি দেওয়া সম্ভব না হওয়ায় তার legendary solution ছিল—",

    "\"zero one seven\" 😁",

    "Honestly... তার এই বুদ্ধি দেখে আমি একটু অবাকই হয়েছিলাম। 😂❤️",

    "তারপর কয়েক মাস ধরে চলল আমাদের endless conversations...",

    "কিন্তু গল্পটা তখনও পুরোপুরি লেখা হয়নি...",

    "27 April 2024... হঠাৎ করেই সে হারিয়ে গেল।",

    "আমি খুঁজেছি... কিন্তু তাকে আর পাইনি। 💔",

    "সময় চলে গেল। অনেক কিছু বদলে গেল।",

    "But maybe... the story wasn't meant to end there.",

    "Because then came 2 June 2025. ✨",

    "একদিন হঠাৎ... an unknown number texted me.",

    "আর সেই unknown number-এর ওপাশে ছিল... সে। ❤️",

    "তারপর থেকে... we never really lost contact again.",

    "And maybe that's the beautiful part...",

    "কিছু মানুষ আমাদের জীবনে হঠাৎ আসে, আবার হঠাৎ হারিয়েও যায়...",

    "কিন্তু যদি গল্পটা সত্যিই তাদের নিয়ে হয়...",

    "somehow, they find their way back. 🤍"

];

let chapter2Line = 0;


function startChapter2(){

    chapter2Line = 0;

    document.getElementById("chapter2Story").innerHTML = "";

    document.getElementById("chapter2NextBtn").style.display = "block";

    showNextChapter2Line();

}


function showNextChapter2Line(){

    if(chapter2Line >= chapter2Lines.length){

        document.getElementById("chapter2NextBtn").innerHTML =
            "📖 Continue to Chapter 3";

        document.getElementById("chapter2NextBtn").onclick =
            goToChapter3;

        return;

    }


    let text = chapter2Lines[chapter2Line];

    let box = document.getElementById("chapter2Story");

    box.innerHTML = "";

    let i = 0;


    let typing = setInterval(function(){

        box.innerHTML += text.charAt(i);

        i++;


        if(i >= text.length){

            clearInterval(typing);

            chapter2Line++;

        }

    },45);

}


function goToChapter3(){

    alert("Chapter 3 is coming soon ❤️");

}
// =========================
// CHAPTER 2 STORY
// =========================

const chapter2Lines = [

    "Our story didn't really start with a beautiful moment... 🤍",

    "বরং শুরু হয়েছিল একটা classroom আর একটা ছোট্ট ঝগড়া দিয়ে। 😬",

    "সেদিন হয়তো ভাবিনি, এই মানুষটাই একদিন আমার জীবনের এতটা কাছের একজন হয়ে যাবে।",

    "তখন আমরা খুব close ছিলাম না... friend বললেও হয়তো একটু বেশি বলা হয়ে যেত।",

    "Then came 28 November 2023... ✨",

    "একটা simple video... একটা comment... আর সেখান থেকেই আবার শুরু হলো কথা বলা।",

    "তারপর একদিন সে আমাকে তার number দিতে চাইল।",

    "But TikTok had other plans! 😭😂",

    "তাই privacy-এর কারণে number সরাসরি দেওয়া সম্ভব না হওয়ায় তার legendary solution ছিল—",

    "\"zero one seven\" 😁",

    "Honestly... তার এই বুদ্ধি দেখে আমি একটু অবাকই হয়েছিলাম। 😂❤️",

    "তারপর কয়েক মাস ধরে চলল আমাদের endless conversations...",

    "কিন্তু গল্পটা তখনও পুরোপুরি লেখা হয়নি...",

    "27 April 2024... হঠাৎ করেই সে হারিয়ে গেল।",

    "আমি খুঁজেছি... কিন্তু তাকে আর পাইনি। 💔",

    "সময় চলে গেল। অনেক কিছু বদলে গেল।",

    "But maybe... the story wasn't meant to end there.",

    "Because then came 2 June 2025. ✨",

    "একদিন হঠাৎ... an unknown number texted me.",

    "আর সেই unknown number-এর ওপাশে ছিল... সে। ❤️",

    "তারপর থেকে... we never really lost contact again.",

    "And maybe that's the beautiful part...",

    "কিছু মানুষ আমাদের জীবনে হঠাৎ আসে, আবার হঠাৎ হারিয়েও যায়...",

    "কিন্তু যদি গল্পটা সত্যিই তাদের নিয়ে হয়...",

    "somehow, they find their way back. 🤍"

];

let chapter2Line = 0;
let chapter2Typing = null;


function startChapter2(){

    chapter2Line = 0;

    document.getElementById("chapter2Story").innerHTML = "";

    showNextChapter2Line();

}


function showNextChapter2Line(){

    if(chapter2Typing){
        clearInterval(chapter2Typing);
    }

    if(chapter2Line >= chapter2Lines.length){

        let btn = document.getElementById("chapter2NextBtn");

        btn.innerHTML = "📖 Continue to Chapter 3";

        btn.onclick = goToChapter3;

        return;
    }

    let text = chapter2Lines[chapter2Line];

    let box = document.getElementById("chapter2Story");

    box.innerHTML = "";

    let i = 0;

    chapter2Typing = setInterval(function(){

        box.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(chapter2Typing);

            chapter2Typing = null;

            chapter2Line++;

        }

    },45);

}


function goToChapter3(){

    alert("Chapter 3 is coming soon ❤️");

}
