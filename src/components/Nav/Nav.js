/* eslint-disable max-len */
import './nav.scss';
import { LayoutGroup, motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTitlePosition, setPageToGo, setIsScale } from '../../feature/navigation.slice';
import { navData } from './navData';
import { initNavHomeVariants, navOtherPageToHomeVariants, navOtherPageVariants } from '../../variants/variants';
import GlitchElement from './GlitchElement';

function Nav() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.navigation);
  //
  // get variants to display
  //
  let variantsToDisplay;
  if (!location.state) {
    variantsToDisplay = initNavHomeVariants;
  }
  if (location.pathname !== '/' && location.state) {
    variantsToDisplay = navOtherPageVariants;
  }
  if (location.pathname === '/' && location.state) {
    variantsToDisplay = navOtherPageToHomeVariants;
  }
  return (
    <motion.div
      className="nav"
      initial="init"
      animate="open"
      exit="close"
      variants={variantsToDisplay}
    >
      {navData.map((navPart) => (
        <motion.div
          key={navPart.name}
          className="nav-element"
          initial="init"
          animate="open"
          variants={location.pathname === '/' && !location.state ? navPart.variants : ''}
        >
          <LayoutGroup>
            {navPart.link.map((link) => (
              <NavLink
                key={link.text}
                className={link.name}
                to={link.path}
                state={{ previous: location.pathname || '' }}
                onClick={() => {
                  dispatch(setTitlePosition(link.position));
                  dispatch(setPageToGo(link.path));
                }}
                onMouseOver={() => dispatch(setIsScale(true))}
                onMouseOut={() => dispatch(setIsScale(false))}
              >
                {link.position === title ? (
                  <motion.div
                    className="leftline"
                    layoutId="leftline"
                  />
                ) : null}
                <GlitchElement text={link.text} position={link.position} />
                {link.position === title ? (
                  <motion.div
                    className="rightline"
                    layoutId="rightline"
                  />
                ) : null}
              </NavLink>
            ))}
          </LayoutGroup>

        </motion.div>
      ))}
    </motion.div>
  );
}

export default Nav;
