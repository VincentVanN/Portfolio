import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function Page({ children }) {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
