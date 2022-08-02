/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="screen ">0</div>
        <div className="keyboad">
          <button type="button" className="numpad">AC</button>
          <button type="button" className="numpad">+/-</button>
          <button type="button" className="numpad">%</button>
          <button type="button" className="numpad">+</button>

          <button type="button" className="numpad">7</button>
          <button type="button" className="numpad">8</button>
          <button type="button" className="numpad">9</button>
          <button type="button" className="numpad">&times;</button>

          <button type="button" className="numpad">4</button>
          <button type="button" className="numpad">5</button>
          <button type="button" className="numpad">6</button>
          <button type="button" className="numpad">-</button>

          <button type="button" className="numpad">1</button>
          <button type="button" className="numpad">2</button>
          <button type="button" className="numpad">3</button>
          <button type="button" className="numpad">+</button>

          <button type="button" className="numpad">0</button>
          <button type="button" className="numpad">.</button>
          <button type="button" className="numpad">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
