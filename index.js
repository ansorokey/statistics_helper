import statForms from "./forms.js";

const contentBox = document.querySelector("#conttent-box");
const calcSelect = document.querySelector("#calcSelect");
const inpProb = document.querySelector("#inpProb");
const inpSize = document.querySelector("#inpSize");
const btnCalc = document.querySelector("#btnCalc");
const results = document.querySelector("#results");
const zScoreCalc = document.querySelector("#zScoreCalc");

function calcStdDev(p, n) {
    return Math.sqrt(
        (p*(1-p)) / n
    )
}

function calcZScore(exp, acp, n) {
    return (exp - acp) / calcStdDev(acp, n);

}

calcSelect.addEventListener("change", (e) => {
    console.log(e.target.value)
    contentBox.innerHTML = statForms[e.target.value];
})


btnCalc.addEventListener("click", () => {
    const inputA = document.querySelector("#a");
    const inputB = document.querySelector("#b");
    
    let res = calcStdDev(inputA.value, inputB.value);
    results.value = res;
});

// ### Z SCORE CALCULATE ###
btnCalc.addEventListener("click", () => {
    const inputA = document.querySelector("#inputA");
    const inputB = document.querySelector("#inputB");
    const inputC = document.querySelector("#inputC");

    results.value = calcZScore(inputA.value, inputB.value, inputC.value);
});