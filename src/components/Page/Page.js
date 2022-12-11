import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';

function Page({ children }) {
  return (
    <main>
      <Nav />
      {children}

    </main>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
