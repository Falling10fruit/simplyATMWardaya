import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

const invalidaccountnumber = document.getElementById("invalidaccountnumber");
const invalidpin = document.getElementById("invalidpin");

document.getElementById("submitButton").onclick = async () => {
    invalidaccountnumber.style.visibility = "hidden";
    invalidpin.style.visibility = "hidden";
    const accountNumber = document.getElementById("accountNumberInput").value;
    const pin = document.getElementById("pinInput").value;

    if (accountNumber%1 != 0) {
        invalidaccountnumber.innerHTML = "Must be an integer";
        invalidaccountnumber.style.visibility = "visible";
    } 

    if (pin%1 != 0) {
        invalidpin.innerHTML = "Must be an integer";
        invalidpin.style.visibility = "visible";
    }

    if (accountNumber.length != 8) {
        invalidaccountnumber.innerHTML = "Must be eight characters long";
        invalidaccountnumber.style.visibility = "visible";
    }
    
    if (pin.length != 4) {
        invalidpin.innerHTML = "Must be four characters long";
        invalidpin.style.visibility = "visible";
    }

    const accountDoc = await getDoc(doc(db, "userInfo", "account" + accountNumber));

    if (!accountDoc.exists() && !isnumberinvalid()) {
        invalidaccountnumber.innerHTML = "Account does not exist";
        invalidaccountnumber.style.visibility = "visible";
    }

    if (!ispininvalid() && !isnumberinvalid()) {
        if (accountDoc.data().PIN != pin) {
            invalidpin.innerHTML = "Pin is incorrect";
            invalidpin.style.visibility = "visible";
        }
    }

    if (ispininvalid() || isnumberinvalid()) { return }

    localStorage.setItem("accountNumber", parseInt(accountNumber));
    localStorage.setItem("PIN", parseInt(pin));
    window.location.href = "../mainmenu/";
}

function ispininvalid () {
    if  (invalidpin.style.visibility == "visible") {
        return true
    } else {
        return false
    }
}

function isnumberinvalid () {
    if (invalidaccountnumber.style.visibility == "visible") {
        return true
    } else {
        return false
    }
}