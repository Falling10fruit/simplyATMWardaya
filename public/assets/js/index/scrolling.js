const intersectionHandler = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
})

const popupStuff = document.getElementsByClassName("featureSections");

for (let sectionIndex = 0; sectionIndex < popupStuff.length; sectionIndex++) {
    console.log(popupStuff[sectionIndex])
    intersectionHandler.observe(popupStuff[sectionIndex].children[0]);
    intersectionHandler.observe(popupStuff[sectionIndex].children[1]);
    popupStuff[sectionIndex].children[1].style.transitionDelay = "100ms";
}

