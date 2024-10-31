const stdDev = `
    <h2>Standard Deviation</h2>

    <label>
        Probability:
        <input 
            id="inputA"
            type="number" 
            placeholder="0.0"                
        >
    </label>

    <label>
        Sample Size:
        <input id="inputB" type="number" placeholder="000">
    </label>

    <button
        id="calcBtn"
    >
        Calculate
    </button>

    <label>
        Result:
        <input id="results" readonly>
    </label>
`;

const zScore = `
        <h2>Z Score</h2>
        
        <label>
            Tested Value:
            <input 
                id="inputA"
                type="number"
                placeholder="0.0"
            >
        </label>

        <label>
            Expected Value:
            <input id="inputB" type="number" placeholder="0.0">
        </label>

        <label>
            Sample Size:
        <input id="inputC" type="number" placeholder="000">
        </label>

        <button id="calcBtn">
            Calculate
        </button>

        <label>
            Results:
            <input type="text" id="results" readonly>
        </label>
`;

function calcStdDev(p, n) {
    return Math.sqrt(
        (p*(1-p)) / n
    )
}

function calcZScore(exp, acp, n) {
    return (exp - acp) / calcStdDev(acp, n);
}

export const statButtons = {
    stdDev: () => {
        const inputA = document.querySelector("#inputA");
        const inputB = document.querySelector("#inputB");
        const results = document.querySelector("#results");
        
        results.value = calcStdDev(inputA.value, inputB.value);
    },
    zScore: () => {
        const inputA = document.querySelector("#inputA");
        const inputB = document.querySelector("#inputB");
        const inputC = document.querySelector("#inputC");
        const results = document.querySelector("#results");
    
        results.value = calcZScore(inputA.value, inputB.value, inputC.value);
    }
}

export const statForms = {stdDev, zScore,};