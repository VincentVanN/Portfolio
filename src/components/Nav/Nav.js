/* eslint-disable max-len */
import './nav.scss';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTitlePosition, setPageToGo, setIsScale } from '../../feature/navigation.slice';
import { navData } from './navData';
import { initNavHomeVariants, navOtherPageToHomeVariants, navOtherPageVariants } from '../../variants/variants';

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
          className={navPart.name}
          initial="init"
          animate="open"
          variants={location.pathname === '/' && !location.state ? navPart.variants : ''}
        >
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
                  initial={{ y: -150 }}
                  animate={{ y: 0 }}
                  exit={{ y: -150 }}
                />
              ) : null}
              <p>
                {link.text}
              </p>
              {link.position === title ? (
                <motion.div
                  className="rightline"
                  initial={{ y: -150 }}
                  animate={{ y: 0 }}
                  exit={{ y: -150 }}
                />
              ) : null}
            </NavLink>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Nav;
