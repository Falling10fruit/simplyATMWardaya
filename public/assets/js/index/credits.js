const gallery = document.getElementById("gallery");
const contributers = [
    {
        name: "Gary",
        contribution: "Icon stylist and mobile designer"
    },
    {
        name: "Jilly",
        contribution: "Mobile architect"
    },
    {
        name: "Carin",
        contribution: "Desktop designer"
    },
    {
        name: "Bruce",
        contribution: "photographer"
    }
];

addContributers();
addContributers();

function addContributers () {
    for (let i = 0; i < contributers.length; i++) {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.setAttribute("src", "assets/images/index/" + contributers[i].name.toLowerCase() + ".jpeg");
        img.setAttribute("alt",contributers[i].name);
        figure.appendChild(img);

        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = "<span>" + contributers[i].name + "</span><br>" + contributers[i].contribution;
        figure.appendChild(figcaption);

        gallery.appendChild(figure)
    }
}