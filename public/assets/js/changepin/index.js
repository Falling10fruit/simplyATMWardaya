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

document.getElementById("submit").onclick = () => {
    const newpin = document.getElementById("newpin");
    const confirm = document.getElementById("confirm");

    if (newpin%1 != 0) {
        console.error("pin must be an integer");
        return
    }

    if (newpin < 0) {
        console.error("pin must be positive");
        return
    }

    if (newpin.length != 4) {
        console.error("pin must be four characters long");
        return
    }

    if (newpin != confirm) {
        console.error("new pin does not match confirmation");
        return
    }

    updateDoc(accountref, {
        "PIN": parseInt(newpin)
    }).then(() => {
        window.location.href = "../mainmenu/";
    });
}