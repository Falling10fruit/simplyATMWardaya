const menuButton = document.getElementById("buttonButNotButtonSoIDontNeedToRestartAllStyling");
const optionsNav = document.getElementById("optionsNav");

menuButton.onclick = () => {
    optionsNav.style.visibility = "visible";
}

document.onclick = (event) => {
    if (!menuButton.contains(event.target) && window.innerWidth < 1000) {
        optionsNav.style.visibility = "hidden";
    }
}

window.onresize = () => {
    if (window.innerWidth < 1000) {
        optionsNav.style.visibility = "hidden";
    } else {
        optionsNav.style.visibility = "visible";
    }
}