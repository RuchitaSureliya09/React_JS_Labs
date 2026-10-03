import React, { useState } from 'react'

// 1. WAP to create a simple calculator using ReactJS. (A)

function A1() {
    const [exp, setExp] = useState("")

    const handleClick = (value) => {
        if (value === "AC") {
            setExp("")
        }
        else if (value === "DEL") {
            setExp(exp.slice(0, -1))
        }
        else if (value === "=") {
            setExp(String(eval(exp)))
        }
        else {
            setExp(exp + value)
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">

                    <div className="card shadow p-3">
                        <h3 className="text-center mb-3">
                            Simple Calculator
                        </h3>

                        <input
                            type="text"
                            className="form-control form-control-lg text-end mb-3"
                            value={exp}
                            readOnly
                        />

                        <div className="row g-2">

                            <div className="col-3">
                                <button
                                    className="btn btn-danger w-100"
                                    onClick={() => handleClick("AC")}
                                >
                                    AC
                                </button>
                            </div>

                            <div className="col-3">
                                <button
                                    className="btn btn-warning w-100"
                                    onClick={() => handleClick("DEL")}
                                >
                                    DEL
                                </button>
                            </div>

                            <div className="col-3">
                                <button
                                    className="btn btn-secondary w-100"
                                    onClick={() => handleClick("%")}
                                >
                                    %
                                </button>
                            </div>

                            <div className="col-3">
                                <button
                                    className="btn btn-secondary w-100"
                                    onClick={() => handleClick("/")}
                                >
                                    /
                                </button>
                            </div>


                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("7")}>7</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("8")}>8</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("9")}>9</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-secondary w-100"
                                    onClick={() => handleClick("*")}>*</button>
                            </div>


                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("4")}>4</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("5")}>5</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("6")}>6</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-secondary w-100"
                                    onClick={() => handleClick("-")}>-</button>
                            </div>


                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("1")}>1</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("2")}>2</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("3")}>3</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-secondary w-100"
                                    onClick={() => handleClick("+")}>+</button>
                            </div>


                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("00")}>00</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick("0")}>0</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-light border w-100"
                                    onClick={() => handleClick(".")}>.</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-primary w-100"
                                    onClick={() => handleClick("=")}>=</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default A1