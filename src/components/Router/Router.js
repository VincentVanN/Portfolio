import {
  Route, Routes, useLocation,
} from 'react-router';
import { AnimatePresence } from 'framer-motion';
import Home from '../Home/Home';
import Page from '../Page/Page';
import Contact from '../Contact/Contact';
import Achievement from '../Achievement/Achievement';
import About from '../About/About';
import Cv from '../Cv/Cv';

function Router() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={(
            <Page>
              <Home />
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
    </AnimatePresence>

  );
}

export default Router;
