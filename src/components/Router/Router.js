import PropTypes from 'prop-types';
import {
  Route, Routes,
} from 'react-router';
import Home from '../Home/Home';
import Page from '../Page/Page';
import Contact from '../Contact/Contact';
import Achievement from '../Achievement/Achievement';
import About from '../About/About';
import Cv from '../Cv/Cv';

function Router({ windowSize }) {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <Page>
            <Home windowSize={windowSize} />
          </Page>
        )}
      />
      <Route
        path="/contact"
        element={(
          <Page>
            <Contact />
          </Page>
        )}
      />
      <Route
        path="/realisations"
        element={(
          <Page>
            <Achievement />
          </Page>
        )}
      />
      <Route
        path="/about"
        element={(
          <Page>
            <About />
          </Page>
        )}
      />
      <Route
        path="/Curriculum-vitae"
        element={(
          <Page>
            <Cv />
          </Page>
        )}
      />
    </Routes>
  );
}
Router.propTypes = {
  windowSize: PropTypes.object.isRequired,
};
export default Router;
