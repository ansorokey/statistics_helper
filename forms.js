const stdDev = ```
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
        id="btnCalc"
    >
        Calculate
    </button>

    <label>
        Result:
        <input id="results" readonly>
    </label>
```

const zScore = ```
        <h2>Z Score</h2>
        
        <label>
            Tested Value:
            <input id="inputA" type="number">
        </label>

        <label>
            Expected Value:
            <input id="inputB" type="number" placeholder="0.0">
        </label>

        <label>
            Sample Size:
        <input id="inputC" type="number" placeholder="000">
        </label>

        <button id="btnCalc">
            Calculate
        </button>

        <input type="text" id="results" readonly>
```

export default {stdDev, zScore};