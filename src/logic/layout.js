import Navigation from './navigation.js';

const Layout = (props) => (
  <div>
    <main>
        <Navigation />
        { props.children };
    </main>
  </div>
);

export default Layout;