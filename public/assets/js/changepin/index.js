import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvqMtjskZ_a8JkM61VJQ_h4iArBwFNnZ0",
    authDomain: "simplyatmwardaya.firebaseapp.com",
    projectId: "simplyatmwardaya",
    storageBucket: "simplyatmwardaya.firebasestorage.app",
    messagingSenderId: "1073528834240",
    appId: "1:1073528834240:web:2dc4df309693940e938525"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const accountNumber = parseInt(localStorage.getItem("accountNumber"));
const accountref = doc(db, "userInfo", "account" + accountNumber);

const invalidinput = document.getElementsByClassName("invalidinput");
let isinvalid = false;

document.getElementById("submit").onclick = () => {
    invalidinput[0].style.visibility = "hidden";
    invalidinput[1].style.visibility = "hidden";
    isinvalid = false;

    const newpin = document.getElementById("newpin").value;
    const confirm = document.getElementById("confirm").value;

    if (newpin%1 != 0) {
        invalid("New pin must be an integer", 0);
    }

    if (newpin < 0) {
        invalid("Pin must be positive", 0);
    }

    if (newpin.length != 4) {
        invalid("Pin must be 4 characters", 0)
    }

    if (newpin != confirm) {
        console.log("Bro you can't even repeat the four character number? thats minus aura broski");

        invalid("Confirmation pin does not match", 1);
    }

    if (isinvalid) { return }

    updateDoc(accountref, {
        "PIN": parseInt(newpin)
    }).then(() => {
        window.location.href = "../mainmenu/";
    });
}

function invalid (message, index) {
    if (window.innerWidth < 1000) {
        invalidinput[0].innerHTML = message;
        invalidinput[0].style.visibility = "visible";
        isinvalid = true;
    } else {
        invalidinput[0].style.positionArea = "--newpin";
        invalidinput[1].style.positionArea = "--confirm"; // I dunno man why nth child aint working
        invalidinput[index].innerHTML = message;
        invalidinput[index].style.visibility = "visible";
        isinvalid = true;
    }
}