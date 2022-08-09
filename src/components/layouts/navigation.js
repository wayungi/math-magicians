import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => (
  <header className={styles.header}>
    <div className={styles.brand}><h1>Math magicians</h1></div>
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/calculator" className={styles.link}>Calculator</Link></li>
        <li><Link to="/quote" className={styles.link}>Quote</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
