import React, { useEffect, useState } from "react";
import "../Components/Style.css";

export default function Calculator() {
  const [current, set_current] = useState("");
  const [operator, set_operator] = useState("");
  const [second, set_second] = useState("");
  const [top, set_top] = useState("");

  function math() {
    if (operator === "÷") {
      const result = current.toString().split(",").join("") / second.toString().split(",").join("");
      set_current(result);
      set_operator("");
      set_second("");
    }
    if (operator === "×") {
      const result = current.toString().split(",").join("") * second.toString().split(",").join("");
      set_current(result);
      set_operator("");
      set_second("");
    }
    if (operator === "+") {
      const resultUno = current.toString().split(",").join("");
      const resultDos = second.toString().split(",").join("");
      const result = parseFloat(resultUno) + parseFloat(resultDos);
      set_current(result);
      set_operator("");
      set_second("");
    }
    if (operator === "-") {
      const result = current.toString().split(",").join("") - second.toString().split(",").join("");
      set_current(result);
      set_operator("");
      set_second("");
    }
  }
  function handleClick(e) {
    if (
      e.target.innerText === "÷" ||
      e.target.innerText === "×" ||
      e.target.innerText === "+" ||
      e.target.innerText === "-"
    ) {
      set_operator(e.target.innerText);
    } else if (e.target.innerText === "AC") {
      set_current("");
      set_operator("");
      set_second("");
      set_top("");
    } else if (e.target.innerText === "DEL") {
      if (current === "") {
        window.confirm("Are you sure you want to create a small black hole?");
      } else {
        current.pop();
        set_current([...current]);
      }
    } else if (!operator) {
      set_current([...current, e.target.innerText]);
    } else {
      set_second([...second, e.target.innerText]);
    }
    if (e.target.innerText === "=") {
      const input1 = current.toString().split(",").join("");
      const input2 = second.toString().split(",").join("");
      set_top(`${input1}${operator}${input2}`);
      math();
    }
  }

  return (
    <div>
      <div class="calculator-grid">
        <div class="output">
          <div class="previous-operand">{top}</div>
          <div class="current-operand">
            {current}
            {operator}
            {second}
          </div>
        </div>
        <button onClick={handleClick} class="span-two">
          AC
        </button>
        <button onClick={handleClick}>DEL</button>
        <button onClick={handleClick}>÷</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>×</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>.</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick} class="span-two">
          =
        </button>
      </div>
    </div>
  );
}
