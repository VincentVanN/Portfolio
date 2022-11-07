/* eslint-disable max-len */
import './nav.scss';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsOnTittle } from '../../feature/navigation.slice';
import { navData } from './navData';
import NavLetter from './NavLetter';

function Nav() {
  const location = useLocation();
  const dispatch = useDispatch();
  const generateKey = (letter, index) => `${letter}_${index}_${new Date().getTime()}`;
  return (
    <motion.div
      className="nav"
      exit={{
        position: 'absolute',
        y: 0,
        height: '10%',
      }}
      transition={{
        duration: 1,
        position: { delay: 0.8 },
        y: { delay: 0.8 },
      }}
    >
      <motion.div className="nav-container">
        {navData.map((navPart) => (
          <motion.div
            key={navPart.name}
            className={navPart.name}
            initial="init"
            animate="open"
            variants={navPart.variants}
          >
            {navPart.link.map((link) => {
              const navLinkObject = {
                pathname: link.path,
                state: { previous: location.pathname },
              };
              return (
                <NavLink
                  key={link.path}
                  className={link.name}
                  to={navLinkObject}
                  style={{ opacity: location.pathname === '/' && navPart.name === 'nav-center' ? 0 : 1 }}
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
              );
            })}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Nav;
