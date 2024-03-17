import React, { useState } from "react";
import "../style/index.css";
import "./App.css";
import Button from "./Button";
import Input from "./Input";
function App() {
  // state of entered value and result
  const [val, setVal] = useState(0);

  // No allow to add number after '='
  var status__number = false;
  var last_char = val[val.length - 1];
  try {
    if (val.toString().includes("=")) status__number = true;
  } catch (err) {}

  // var new_val = val;
  if (
    last_char === "/" ||
    last_char === "*" ||
    last_char === "-" ||
    last_char === "+" ||
    last_char === "="
  ) {
    last_char = true;
  } else {
    last_char = false;
  }

  // numbers click function
  function ButtonClk(e) {
    return val === 0
      ? setVal(e.target.innerText)
      : status__number
      ? setVal(
          val
            .toString()
            .replace(val.slice(val.indexOf("=")), "" + e.target.innerText)
        )
      : setVal(val + e.target.innerText);
  }

  // operators click function
  function Operation(e) {
    return !last_char
      ? !status__number
        ? setVal(val + "" + e.target.innerText)
        : setVal(
            val
              .toString()
              .replace(val.slice(val.indexOf("=")), "" + e.target.innerText)
          )
      : setVal(val.slice(0, -1) + e.target.innerText);
  }

  // enter (=) click function
  function Enter(e) {
    var result;
    var status = false;
    try {
      if (val.length) {
        result = eval(val);
        status = true;
      }
    } catch (ex) {}

    return status
      ? !last_char
        ? setVal(val + "" + e.target.innerText + result)
        : setVal(0)
      : setVal(0);
  }

  /* eslint no-eval: 0 */
  function Clear() {
    setVal(0);
  }

  // backspace function
  function BackCR() {
    if (val.length > 1) {
      setVal(val.slice(0, -1));
    } else {
      setVal(0);
    }
  }

  return (
    <>
      <div className="minHe">
        <div className="Calculator">
          {/* <Darkmode /> */}
          <div className="padd__box">
            <Input value={val} />
          </div>
          <div className="Operations">
            <div className="parent">
              <button onClick={BackCR} cls="cls">
                ←
              </button>
              <Button onClick={Clear} cls="cls">
                C
              </Button>
              <Button cls="buttons__si" onClick={Operation}>
                /
              </Button>
              <Button cls="buttons__si" onClick={Operation}>
                *
              </Button>
            </div>

            <div className="parent">
              <Button onClick={ButtonClk}>7</Button>
              <Button onClick={ButtonClk}>8</Button>
              <Button onClick={ButtonClk}>9</Button>
              <Button cls="buttons__si" onClick={Operation}>
                -
              </Button>
            </div>

            <div className="parent">
              <Button onClick={ButtonClk}>4</Button>
              <Button onClick={ButtonClk}>5</Button>
              <Button onClick={ButtonClk}>6</Button>
              <Button cls="buttons__si" onClick={Operation}>
                +
              </Button>
            </div>

            <div className="parent">
              <Button onClick={ButtonClk}>1</Button>
              <Button onClick={ButtonClk}>2</Button>
              <Button onClick={ButtonClk}>3</Button>
              <Button onClick={Enter} cls="buttons__si equals">
                =
              </Button>
            </div>
            <div className="parent last__pa">
              <Button onClick={ButtonClk} cls="dot">
                0
              </Button>
              <Button onClick={ButtonClk}>.</Button>
              <Button cls="noneBtn">=</Button>
            </div>
            {/* <Button onClick={Enter}>=</Button> */}
            {/* <Button>X</Button>
          <Button>X</Button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
