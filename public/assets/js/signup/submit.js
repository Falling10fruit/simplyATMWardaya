import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

const invalidinput = document.getElementsByClassName("invalidinput");
const submit = document.getElementById("submitButton");

submit.onclick = () => {
    if (invalidinput.length != 0) { invalidinput[0].remove() }

    const input = document.getElementById("pinInput").value;

    if (input.length == 4 && input%1 == 0) {
        const accountNumber = Math.floor(Math.random()*10**8);

        setDoc(doc(db, "userInfo", "account" + accountNumber), {
            PIN: input*1,
            balance: 0
        }).then(() => {

            localStorage.setItem("accountNumber", accountNumber);
            localStorage.setItem("PIN", input*1);

            window.location.href = "../mainmenu";
        });
    } else {
        const errormessage = document.createElement("div");
        errormessage.setAttribute("class", "invalidinput");
        errormessage.innerText = "PIN must be a four character long integer";

        if (window.innerWidth < 1000) {
            document.body.appendChild(errormessage);

            errormessage.style.positionAnchor = "--mobile";
            errormessage.style.positionArea = "bottom center";

            window.onresize = () => {
                if (window.innerWidth > 1000) {
                    errormessage.remove();
                }
            }
        } else {
            document.body.appendChild(errormessage);

            errormessage.style.positionAnchor = "--desktop";
            errormessage.style.positionArea = "right center";

            window.onresize = () => {
                if (window.innerWidth < 1000) errormessage.remove();
            }
        }
    }
}