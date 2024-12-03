let announce = document.getElementById("countdown");
let countdown = 5;

setInterval(updateMessage, 1000);

function updateMessage () {
    countdown--

    if (window.innerWidth < 1000) {
        announce.innerHTML = "try again in... " + countdown;
    
        if (countdown < 1) {
            window.location.href = "../";
            announce.innerHTML = "redirecting to welcome page"
        }
    } else {
        announce.innerHTML = "Try again in ... " + countdown;
    
        if (countdown < 1) {
            window.location.href = "../";
            announce.innerHTML = "Redirecting to welcome page"
        }
    }
}