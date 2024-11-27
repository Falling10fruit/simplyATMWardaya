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

document.getElementById("account").innerText = "account" + accountNumber;
document.getElementById("balance").innerText = "Rp " + dotafy(accountdoc.data().balance);

document.getElementById("confirm").onclick = () => {
    if (checkchecks() == "none") {
        console.error("nothing is selected");
        return
    }

    updateDoc(accountref, {
        balance: increment(checkchecks())
    }).then(() => {
        window.location.href = "../mainmenu/";
    });
}

function checkchecks () {
    const options = document.getElementById("options").children;

    for (let i = 0; i < options.length; i++) {
        if (options[i].children[0].checked) {
            return parseInt(options[i].children[0].value)
        }
    }

    return "none"
}

function dotafy ( num ) {
    var str = num.toString().split('.');
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
    return str.join(',');
}