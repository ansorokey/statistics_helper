const inpProb = document.querySelector("#inpProb");
const inpSize = document.querySelector("#inpSize");
const btnCalc = document.querySelector("#btnCalc");
const results = document.querySelector("#results");

function calcStdDev(p, n, round=2) {
    return Math.sqrt(
        (p*(1-p)) / n
    )
}

btnCalc.addEventListener("click", () => {
    let res = calcStdDev(npProb.value, inpSize.value);
    results.value = res;
})
    

results.value = "Hello world";