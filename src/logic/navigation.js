import { Link } from 'react-router-dom';

const Navigation = () => (
        <header>
            <div>Math magicians</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/calculator">Calculator</Link></li>
                    <li><Link to="/quotes">Quote</Link></li>
                </ul>
            </nav>
        </header>
    );
export default Navigation;
