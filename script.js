// Set your secret password here
const secretPassword = "iloveyou";

function checkPassword() {
    document.getElementById("locked").classList.remove("hidden");
}

function unlockSite() {
    let enteredPassword = document.getElementById("password").value;
    if (enteredPassword === secretPassword) {
        document.getElementById("locked").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");
    } else {
        alert("Wrong password! Try again.");
    }
}

function showLoveLetter() {
    document.getElementById("letter").innerHTML = 
        "My Love, from the moment I met you, my life changed forever. Every heartbeat of mine whispers your name, and every thought is filled with you. I love you beyond words and will cherish you always. ❤️";
}
