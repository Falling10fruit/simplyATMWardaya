const options = document.getElementById("desktopmenu").children;
const now = Date.now();

pop();

function pop () {
    const progress = (Date.now() - now)/1000;

    setScale(progress);

    if (progress < 2) {
        requestAnimationFrame(pop);
    } else {
        setScale(progress);
    }
}

function setScale (progress) {
    for (let i = 0; i < options.length; i++) {
        const x = progress - i/10;
        const curve = Math.cos(5*(x - 1)*Math.PI);
        const damp = 2**(-5*x);

        options[i].style.transform = "scale(" + (x < 0 ? 0 : (curve*damp +1)) + ")";
    }
}
