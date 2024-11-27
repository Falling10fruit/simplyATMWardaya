let announce = document.getElementById("countdown");
let countdown = 5;

setInterval(updateMessage, 1000);

function updateMessage () {
    countdown--
    announce.innerText = "try again in... " + countdown;

    if (countdown < 1) {
        window.location.href = "../";
        announce.innerText = "redirecting to welcome page"
    }
}