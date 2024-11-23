const menuButton = document.getElementById("buttonButNotButtonSoIDontNeedToRestartAllStyling");
const optionsNav = document.getElementById("optionsNav");

menuButton.onclick = () => {
    optionsNav.style.visibility = "visible";
}

document.onclick = (event) => {
    if (!menuButton.contains(event.target)) {
        optionsNav.style.visibility = "hidden";
    }
}