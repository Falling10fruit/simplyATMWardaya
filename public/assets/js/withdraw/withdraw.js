import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore, doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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
const accountdoc = await getDoc(accountref);


document.getElementById("withdrawbutton").onclick = () => {
    const amount = parseFloat(document.getElementById("withdrawinput").value);

    if (amount < 0) {
        console.error("input must be positive");
        return
    }

    if (amount > accountdoc.data().balance) {
        console.error("Cannot withdraw too much");
        return
    }

    updateDoc(accountref, {
        balance: increment(-amount)
    }).then(() => {
        document.getElementById("withdrawinput").value = "";
    });
}