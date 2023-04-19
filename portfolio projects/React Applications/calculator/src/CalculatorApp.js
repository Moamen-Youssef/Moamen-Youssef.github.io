import React from "react";
import { useState, useEffect } from "react";
import './CalculatorApp.css'
function CalculatorApp() {

    const [result, setResult] = useState(0)
    const [preResult, setPreResult] = useState(0);

    const operation = (e) => {
        setResult(`${result != 0 ? result : ''}${e.target.innerHTML == 'X' ? '*' : e.target.innerHTML}`);
    }

    const equal = () => {
        setResult(preResult)
        setPreResult(0);
    }

    const refresh = () => {
        setResult(0)
    }

    const del = () => {
        setResult(result.slice(0, -1))
    }

    useEffect(() => {
        try {
            if (eval(result) !== undefined) {
                setPreResult(eval(result))
            } else {
                setPreResult(0);
            }
        } catch {
            for (let i = 0; i < result.length; i++) {
                if (result[i] == '%') {
                    setPreResult(`${eval(result.slice(0,-1))/ 100}`)
                } else {
                    setPreResult(``)
                }
            }
        }
    }, [result]);

    
    return (

        <div className="operators-numbers">
            <div className="result">
                <input className="screen" value={result} />
                <div className="total">{preResult}</div>
            </div>

            <button className="btn  calc" onClick={refresh}>C</button>
            <button className="btn  calc" onClick={operation}>%</button>
            <button className="btn  calc" onClick={del} >D</button>
            <button className="btn  calc" onClick={operation}>/</button>
            <button className="btn" onClick={operation} >{7}</button>
            <button className="btn" onClick={operation} >8</button>
            <button className="btn" onClick={operation}>9</button>
            <button className="btn  calc" onClick={operation}>X</button>
            <button className="btn" onClick={operation}>4</button>
            <button className="btn" onClick={operation}>5</button>
            <button className="btn" onClick={operation}>6</button>
            <button className="btn  calc" onClick={operation}>-</button>
            <button className="btn" onClick={operation}>1</button>
            <button className="btn" onClick={operation}>2</button>
            <button className="btn" onClick={operation}>3</button>
            <button className="btn  calc" onClick={operation}>+</button>
            <button className="btn" onClick={operation}>00</button>
            <button className="btn" onClick={operation}>0</button>
            <button className="btn" onClick={operation}>.</button>
            <button className="btn  calc equal" onClick={equal}>=</button>

        </div>


    )
}

export default CalculatorApp;