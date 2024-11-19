const elements = document.getElementById("signupSection").children;

for (let i = 0; i < elements.length; i++) {
    elements[i].style.transitionDelay = (1 + i)*2 + "00ms";
}