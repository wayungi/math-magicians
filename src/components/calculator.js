/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="screen">0</div>
        <div className="keyboad">Keyboads</div>
      </div>
    );
  }
}

export default Calculator;
