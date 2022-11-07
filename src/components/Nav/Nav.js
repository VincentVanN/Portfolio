/* eslint-disable max-len */
import './nav.scss';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setIsOnTittle } from '../../feature/navigation.slice';
import { navData } from './navData';
import NavLetter from './NavLetter';
import { initNavHomeVariants, navOtherPageToHomeVariants, navOtherPageVariants } from '../../variants/variants';

function Nav() {
  const location = useLocation();
  const dispatch = useDispatch();
  //
  // generate key for letters's links
  //
  const generateKey = (letter, index) => `${letter}_${index}_${new Date().getTime()}`;
  //
  // rest cursor
  //
  useEffect(() => () => {
    dispatch(setIsOnTittle({ active: false, tittle: 0 }));
  }, []);
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
              key={link.path}
              className={link.name}
              to={link.path}
              state={{ previous: location.pathname || '' }}
              onMouseEnter={() => dispatch(setIsOnTittle({ active: true, tittle: link.position }))}
              onMouseLeave={() => dispatch(setIsOnTittle({ active: false, tittle: 0 }))}
            >
              {link.text.map((letter, index) => (
                <NavLetter
                  key={generateKey(letter, index)}
                  letter={letter}
                  delay={index}
                  position={link.position}
                />
              ))}
            </NavLink>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Nav;
