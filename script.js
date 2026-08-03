function openGift() {
    document.getElementById("giftContainer").classList.add("hidden");
    document.getElementById("passwordBox").classList.remove("hidden");
}

function checkPass() {
    let pass = document.getElementById("pass").value.toLowerCase().trim();

    if (pass === "favourite chapter") {
        document.getElementById("passwordBox").classList.add("hidden");
        document.getElementById("letter").classList.remove("hidden");
    } else {
        alert("❌ Wrong Passcode!");
    }
}

function showFinal() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");

    // ছোট্ট কনফেটি ইফেক্ট
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.animation = "fall 4s linear forwards";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall{
    from{
        transform:translateY(-20px) rotate(0deg);
        opacity:1;
    }
    to{
        transform:translateY(110vh) rotate(360deg);
        opacity:0;
    }
}
`;
document.head.appendChild(style);
