import React, { useState } from "react";

// 2. WAP to create a scientific calculator using ReactJS. (A)

function A2() {
  const [exp, setExp] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setExp("");
    } else if (value === "DEL") {
      setExp(exp.slice(0, -1));
    } else if (value === "=") {
      setExp(String(eval(exp)));
    } else if (value === "√") {
      setExp(String(Math.sqrt(eval(exp))));
    } else if (value === "x²") {
      setExp(String(Math.pow(eval(exp), 2)));
    } else if (value === "x³") {
      setExp(String(Math.pow(eval(exp), 3)));
    } else if (value === "sin") {
      setExp(String(Math.sin((eval(exp) * Math.PI) / 180)));
    } else if (value === "cos") {
      setExp(String(Math.cos((eval(exp) * Math.PI) / 180)));
    } else if (value === "tan") {
      setExp(String(Math.tan((eval(exp) * Math.PI) / 180)));
    } else if (value === "log") {
      setExp(String(Math.log10(eval(exp))));
    } else if (value === "ln") {
      setExp(String(Math.log(eval(exp))));
    } else if (value === "!") {
      let n = eval(exp);
      let fact = 1;

      for (let i = 1; i <= n; i++) {
        fact = fact * i;
      }

      setExp(String(fact));
    } else if (value === "π") {
      setExp(exp + Math.PI);
    } else if (value === "e") {
      setExp(exp + Math.E);
    } else if (value === "1/x") {
      setExp(String(1 / eval(exp)));
    } else if (value === "xʸ") {
      setExp(exp + "**");
    } else if (value === "%") {
      setExp(String(eval(exp) / 100));
    } else {
      setExp(exp + value);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-3">
            <h3 className="text-center mb-3">Scientific Calculator</h3>

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
                  ⌫
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
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("sin")}
                >
                  sin
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("cos")}
                >
                  cos
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("tan")}
                >
                  tan
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => handleClick("*")}
                >
                  *
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("log")}
                >
                  log
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("ln")}
                >
                  ln
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("√")}
                >
                  √
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => handleClick("-")}
                >
                  -
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("x²")}
                >
                  x²
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("x³")}
                >
                  x³
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("xʸ")}
                >
                  xʸ
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => handleClick("+")}
                >
                  +
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("!")}
                >
                  n!
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("1/x")}
                >
                  1/x
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("π")}
                >
                  π
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-info w-100"
                  onClick={() => handleClick("e")}
                >
                  e
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("7")}
                >
                  7
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("8")}
                >
                  8
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("9")}
                >
                  9
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => handleClick("(")}
                >
                  (
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("4")}
                >
                  4
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("5")}
                >
                  5
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("6")}
                >
                  6
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => handleClick(")")}
                >
                  )
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("1")}
                >
                  1
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("2")}
                >
                  2
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("3")}
                >
                  3
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => handleClick("**")}
                >
                  ^
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("00")}
                >
                  00
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick("0")}
                >
                  0
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-light border w-100"
                  onClick={() => handleClick(".")}
                >
                  .
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleClick("=")}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A2;
