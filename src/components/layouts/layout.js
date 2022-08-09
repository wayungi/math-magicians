/* eslint-disable */

import Navigation from './navigation';

const Layout = (props) => (
  <div>
    <main>
      <Navigation />
      {props.children}
    </main>
  </div>
);

export default Layout;
