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

document.getElementById("submitButton").onclick = async () => {
    const accountNumber = document.getElementById("accountNumberInput").value;
    const pin = document.getElementById("pinInput").value;

    if (accountNumber%1 != 0) {
        console.error("accountNumber%1 != 0");
        return
    } 

    if (pin%1 != 0) {
        console.error("pin%1 != 0");
        return
    }

    if (accountNumber.length != 8) {
        console.error("accountNumber.length != 8");
        return
    }
    
    if (pin.length != 4) {
        console.error("pin.length != 4");
        return
    }

    const accountDoc = await getDoc(doc(db, "userInfo", "account" + accountNumber));

    if (!accountDoc.exists()) {
        console.error("account does not exist");
        return
    }

    if (accountDoc.data().PIN != pin) {
        console.error("wrong pin");
        return
    }

    localStorage.setItem("accountNumber", parseInt(accountNumber));
    localStorage.setItem("PIN", parseInt(pin));
    window.location.href = "../mainmenu/";
}