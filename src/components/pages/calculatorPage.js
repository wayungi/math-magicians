/** @format */

import Calculator from '../Calculator';
import styles from './calculatorPage.module.css';

const CalculatorPage = () => (
  <div className={styles.contentWrapper}>
    <h1>Lets do some math</h1>
    <div className={styles.content}>
      <div className={styles.imageWrapper}>
        <img src="https://picsum.photos/500/240" alt="random images" />
      </div>
      <div className={styles.calculatorWrapper}>
        <Calculator />
      </div>
    </div>
    <div className={styles.credits}>
      <p>
        Pictures used on this page are dynamically generated from
        <a href="https://picsum.photos/"> Lorem Picsum</a>
      </p>
    </div>
  </div>
);

export default CalculatorPage;
