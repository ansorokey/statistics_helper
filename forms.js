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
            Standard Deviation:
            <input type="text" id="stdDev" readonly>
        </label>

        <label>
            Results:
            <input type="text" id="results" readonly>
        </label>
`;

const twoPop = `
    <h2>Two Population Z-Score</h2>
    
    <label>
        P1 Success
        <input 
            id="inputA"
            type="number"
            placeholder="00"
        >
    </label>

    <label>
        P1 Sample Size
        <input 
            id="inputB"
            type="number"
            placeholder="00"
        >
    </label>

    <label>
        P2 Success
        <input 
            id="inputC"
            type="number"
            placeholder="00"
        >
    </label>

    <label>
        P2 Sample Size
        <input 
            id="inputD"
            type="number"
            placeholder="00"
        >
    </label>

    <button id="calcBtn">
        Calculate
    </button>

    <label>
        Proportion 1
        <input type="number" id="pro1" readonly>
    </label>

    <label>
        Proportion 2
        <input type="number" id="pro2" readonly>
    </label>

    <label>
        Pooled Proportion
        <input type="number" id="poolPro" readonly>
    </label>

    <label>
        Standard Deviation:
        <input type="number" id="stdDev" readonly>
    </label>
`

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
        const stdDev = document.querySelector("#stdDev");
        const results = document.querySelector("#results");
    
        stdDev.value = calcStdDev(inputB.value, inputC.value);
        results.value = calcZScore(inputA.value, inputB.value, inputC.value);
    },
    twoPop: () => {
        const inputA = +document.querySelector("#inputA").value;
        const inputB = +document.querySelector("#inputB").value;
        const inputC = +document.querySelector("#inputC").value;
        const inputD = +document.querySelector("#inputD").value;
        const pro1 = document.querySelector("#pro1");
        const pro2 = document.querySelector("#pro2");
        const poolPro = document.querySelector("#poolPro");
        const stdDev = document.querySelector("#stdDev");

        let p1 = inputA / inputB;
        let p2 = inputC / inputD;
        let pool = (inputA + inputC) / (inputB + inputD);
        let se = 
            ((p1 - p2) - 0) / 
            Math.sqrt(
                (pool * (1 - pool)) * 
                ((1 / inputB) + (1 / inputD))
            );

        pro1.value = p1;
        pro2.value = p2;
        poolPro.value = pool;
        stdDev.value = se;
    }
}

export const statForms = {stdDev, zScore, twoPop};