const inpProb = document.querySelector("#inpProb");
const inpSize = document.querySelector("#inpSize");
const btnCalc = document.querySelector("#btnCalc");
const results = document.querySelector("#results");
const zScoreInpA = document.querySelector("#zScoreInpA");
const zScoreInpB = document.querySelector("#zScoreInpB");
const zScoreCalc = document.querySelector("#zScoreCalc");
const zScoreResults = document.querySelector("#zScoreResults");

function calcStdDev(p, n, round=2) {
    return Math.sqrt(
        (p*(1-p)) / n
    )
}

function calcZScore(a) {
    return (a - inpProb.value) / results.value;

}

btnCalc.addEventListener("click", () => {
    let res = calcStdDev(inpProb.value, inpSize.value);
    results.value = res;
});

zScoreCalc.addEventListener("click", () => {
    zScoreResults.value = calcZScore(zScoreInpA.value, zScoreInpB.value);
});