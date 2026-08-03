function nextPage() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("passwordPage").style.display = "flex";
}

function checkPassword() {
    let pass = document.getElementById("password").value.toLowerCase().trim();

    if (pass === "favourite chapter") {
        alert("Welcome to your Favourite Chapter ❤️");
    } else {
        alert("Wrong Password 💔");
    }
}
