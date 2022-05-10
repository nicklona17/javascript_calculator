import React, { useState } from 'react';

const App = () => {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(expression);

  const display = (symbol) => {
    setExpression((prevValue) => {
      if (/[+*-/]/.test(symbol) && /[+*-/]/.test(prevValue[prevValue.length - 1])) {
        let newValue;
        if (/[-]/.test(symbol)) {
          newValue = prevValue.slice(0, prevValue.length) + symbol;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(+prevValue[i])) {
              count++;
            } else {
              count = 0;
            }
          }
          newValue = prevValue.slice(0, prevValue.length - count) + symbol;
        }
        setExpression(newValue);
      } else {
        if (prevValue) {
          prevValue = prevValue + "";
          let valArr = prevValue.split(/[+/*-]/g);
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === ".") {
            symbol = "";
          }
        }

        setExpression((prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, "."));
      }    
    });

    setAnswer((prevValue) => (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, "."));
  }

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression(eval(expression));
  };

  const clear = () => {
    setExpression("");
    setAnswer(0);
  };

    return (
      <div className="container">
        <div className="calculator">
          <div className="display">
           <input id="display" className="answer" value={answer} placeholder="0" disabled />
          </div>
          <div>
            <button onClick={clear} id="clear" value="clear">clear</button>
            <button onClick={() => display("0")} className="number" id="zero" value="0">0</button>
            <button onClick={() => display("1")} className="number" id="one" value="1">1</button>
            <button onClick={() => display("+")} id="add" value="+">+</button>
            <button onClick={() => display("-")} id="subtract" value="-">-</button>
            <button onClick={() => display("2")} className="number" id="two" value="2">2</button>
            <button onClick={() => display("3")} className="number" id="three" value="3">3</button>
            <button onClick={() => display("4")} className="number" id="four" value="4">4</button>
            <button onClick={() => display("5")} className="number" id="five" value="5">5</button>
            <button onClick={() => display("*")} id="multiply" value="*">*</button>
            <button onClick={() => display("/")} id="divide" value="/">/</button>
            <button onClick={() => display("6")} className="number" id="six" value="6">6</button>
            <button onClick={() => display("7")} className="number" id="seven" value="7">7</button>
            <button onClick={() => display("8")} className="number" id="eight" value="8">8</button>
            <button onClick={() => display("9")} className="number" id="nine" value="9">9</button>
            <button onClick={() => display(".")} id="decimal" value=".">.</button>
            <button onClick={calculate} id="equals" value="=">=</button>
          </div>
        </div>
      </div>
    );
  }
    
export default App;

/* import React, { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(expression);

  function display(symbol) {
 

    setExpression((prevValue) => {
      if (
        /[+*-/]/.test(symbol) &&
        /[+*-/]/.test(prevValue[prevValue.length - 1])
      ) {
        let newValue;
        if (/[-]/.test(symbol)) {
          newValue = prevValue.slice(0, prevValue.length) + symbol;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(+prevValue[i])) {
              count++;
            } else {
              count = 0;
            }
          }
          newValue = prevValue.slice(0, prevValue.length - count) + symbol;
        }

        setExpression(newValue);
      } else {
        if (prevValue) {
          prevValue = prevValue + "";
          let valArr = prevValue.split(/[+/*-]/g);
          console.log("valArr " + JSON.stringify(valArr));
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === ".") {
            console.log("symbol = empty ");
            symbol = "";
          }
        }

        setExpression(
          (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
        );
      }
    });

    setAnswer((prevValue) =>
      (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
    );
  }

  function calculate() {
    setAnswer(eval(expression));
    setExpression(eval(expression));
  }
  function allClear() {
    setExpression("");
    setAnswer(0);
  }
  function clear() {
    setExpression((prev) => {
      setAnswer(0);
      console.log(prev);
      prev = prev + "";
      return prev
        .split("")
        .slice(0, prev.length - 1)
        .join("");
    });
  }
  return (
    <div className="container">
      <div className="grid">
        <div className="display">
          <input
            class="expression"
            disabled
            placeholder="0"
            value={expression}
          ></input>
          <input
            id="display"
            className="answer"
            disabled
            value={answer}
          ></input>
        </div>
        <div onClick={allClear} className="padButton clear red" id="clear">
          AC
        </div>
        <div onClick={clear} className="padButton c red" id="c">
          C
        </div>
        <div
          onClick={() => display("/")}
          className="padButton divide"
          id="divide"
        >
          /
        </div>
        <div
          onClick={() => display("*")}
          className="padButton multiply"
          id="multiply"
        >
          *
        </div>
        <div
          onClick={() => display("7")}
          className="padButton seven dark-grey"
          id="seven"
        >
          7
        </div>
        <div
          onClick={() => display("8")}
          className="padButton eight dark-grey"
          id="eight"
        >
          8
        </div>
        <div
          onClick={() => display("9")}
          className="padButton nine dark-grey"
          id="nine"
        >
          9
        </div>
        <div
          onClick={() => display("-")}
          className="padButton subtract"
          id="subtract"
        >
          -
        </div>
        <div
          onClick={() => display("4")}
          className="padButton four dark-grey"
          id="four"
        >
          4
        </div>
        <div
          onClick={() => display("5")}
          className="padButton five dark-grey"
          id="five"
        >
          5
        </div>
        <div
          onClick={() => display("6")}
          className="padButton six dark-grey"
          id="six"
        >
          6
        </div>
        <div onClick={() => display("+")} className="padButton add" id="add">
          +
        </div>
        <div
          onClick={() => display("1")}
          className="padButton one dark-grey"
          id="one"
        >
          1
        </div>
        <div
          onClick={() => display("2")}
          className="padButton two dark-grey"
          id="two"
        >
          2
        </div>
        <div
          onClick={() => display("3")}
          className="padButton three dark-grey"
          id="three"
        >
          3
        </div>
        <div onClick={calculate} className="padButton equals" id="equals">
          =
        </div>
        <div
          onClick={() => display("0")}
          className="padButton zero dark-grey"
          id="zero"
        >
          0
        </div>
        <div
          onClick={() => display(".")}
          className="padButton decimal dark-grey"
          id="decimal"
        >
          .
        </div>
      </div>
    </div>
  );
} */

  