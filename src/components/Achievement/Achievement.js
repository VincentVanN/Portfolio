import { NavLink } from 'react-router-dom';
import './achievement.scss';

function Achievement() {
  return (
    <div className="achievement">
      <div className="achievement-container">
        <div className="achievement-nav">
          <div className="achievement-nav-container">
            <div
              className="achievement-nav-left"
            >
              <NavLink
                className="achievement-nav-link"
                to="/about"
              >
                <span
                  data-text="About"
                >
                  About
                </span>
              </NavLink>
              <NavLink
                className="achievement-nav-link"
                to="/realisations"
              >
                <span
                  data-text="realisations"
                >realisations
                </span>
              </NavLink>
            </div>
            <div className="achievement-nav-center">
              <NavLink
                className="achievement-nav-link"
                to="/"
                end
              >
                <span
                  data-text="Accueil"
                >
                  Accueil
                </span>
              </NavLink>
            </div>
            <div
              className="achievement-nav-right"
            >
              <NavLink
                className="achievement-nav-link"
                to="/Curriculum-vitae"
              >
                <span
                  data-text="Curriculum Vitae"
                >
                  Curriculum Vitae
                </span>
              </NavLink>
              <NavLink
                className="achievement-nav-link"
                to="/contact"
              >
                <span
                  data-text="Contact"
                >
                  Contact
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
