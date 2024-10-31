import {statForms, statButtons} from "./forms.js";

const contentBox = document.querySelector("#content-box");
const calcSelect = document.querySelector("#calcSelect");

calcSelect.addEventListener("change", (e) => {
    console.log(e.target.value)
    contentBox.innerHTML = statForms[e.target.value];
    const calcBtn = document.querySelector("#calcBtn");
    calcBtn.addEventListener("click", statButtons[e.target.value]);
});