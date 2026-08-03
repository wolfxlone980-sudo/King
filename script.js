function checkPassword() {

    let pass = document.getElementById("password").value.toLowerCase().trim();

    if (pass === "favourite chapter") {

        document.getElementById("passwordPage").style.display = "none";

        document.getElementById("envelopePage").style.display = "flex";

    } else {

        alert("Wrong Password 💔");

    }

}

function openEnvelope(){

    alert("To Be Continued ❤️");

}
