/**
 * /* eslint-disable react/prefer-stateless-function
 *
 * @format
 */

import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, updateState] = useState({ total: null, next: null, operation: null });

  const clickHandler = (e) => {
    const calcObj = calculate(state, e.target.textContent);
    updateState(calcObj);
  };

  const { total, next } = state;
  return (
    <div className="calculator">
      <div className="screen ">{next || total}</div>
      <div className="keyboad">
        <button type="button" className="numpad" onClick={clickHandler}>
          AC
        </button>
        <button type="button" className="numpad" onClick={clickHandler}>
          +/-
        </button>
        <button type="button" className="numpad" onClick={clickHandler}>
          %
        </button>
        <button type="button" className="numpad operator" onClick={clickHandler}>
          +
        </button>

        <button type="button" className="numpad" onClick={clickHandler}>
          7
        </button>
        <button type="button" className="numpad" onClick={clickHandler}>
          8
        </button>
        <button type="button" className="numpad" onClick={clickHandler}>
          9
        </button>
        <button type="button" className="numpad operator" onClick={clickHandler}>
          x
        </button>

        <button type="button" className="numpad" onClick={clickHandler}>
          4
        </button>
        <button type="button" className="numpad" onClick={clickHandler}>
          5
        </button>
        <button type="button" className="numpad" onClick={clickHandler}>
          6
        </button>
        <button type="button" className="numpad operator" onClick={clickHandler}>
          -
        </button>

        <button type="button" className="numpad" onClick={clickHandler}>
          1
        </button>
        <button type="button" className="numpad" onClick={clickHandler}>
          2
        </button>
        <button type="button" className="numpad" onClick={clickHandler}>
          3
        </button>
        <button type="button" className="numpad operator" onClick={clickHandler}>
          ÷
        </button>

        <button type="button" className="numpad zero" onClick={clickHandler}>
          0
        </button>
        <button type="button" className="numpad" onClick={clickHandler}>
          .
        </button>
        <button type="button" className="numpad operator" onClick={clickHandler}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
