/**
 * /* eslint-disable react/prefer-stateless-function
 *
 * @format
 */

import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
  }

  clickHandler = (e) => {
    const calcObj = calculate(this.state, e.target.textContent);
    this.setState(calcObj);
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <div className="screen ">{next || total}</div>
        <div className="keyboad">
          <button type="button" className="numpad" onClick={this.clickHandler}>
            AC
          </button>
          <button type="button" className="numpad" onClick={this.clickHandler}>
            +/-
          </button>
          <button type="button" className="numpad" onClick={this.clickHandler}>
            %
          </button>
          <button type="button" className="numpad operator" onClick={this.clickHandler}>
            +
          </button>

          <button type="button" className="numpad" onClick={this.clickHandler}>
            7
          </button>
          <button type="button" className="numpad" onClick={this.clickHandler}>
            8
          </button>
          <button type="button" className="numpad" onClick={this.clickHandler}>
            9
          </button>
          <button type="button" className="numpad operator" onClick={this.clickHandler}>
            x
          </button>

          <button type="button" className="numpad" onClick={this.clickHandler}>
            4
          </button>
          <button type="button" className="numpad" onClick={this.clickHandler}>
            5
          </button>
          <button type="button" className="numpad" onClick={this.clickHandler}>
            6
          </button>
          <button type="button" className="numpad operator" onClick={this.clickHandler}>
            -
          </button>

          <button type="button" className="numpad" onClick={this.clickHandler}>
            1
          </button>
          <button type="button" className="numpad" onClick={this.clickHandler}>
            2
          </button>
          <button type="button" className="numpad" onClick={this.clickHandler}>
            3
          </button>
          <button type="button" className="numpad operator" onClick={this.clickHandler}>
            ÷
          </button>

          <button type="button" className="numpad zero" onClick={this.clickHandler}>
            0
          </button>
          <button type="button" className="numpad" onClick={this.clickHandler}>
            .
          </button>
          <button type="button" className="numpad operator" onClick={this.clickHandler}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
