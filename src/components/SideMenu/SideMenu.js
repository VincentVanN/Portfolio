import './sideMenu.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { cardsData } from '../Achievement/cardsData';

function SideMenu({ setObjectToDisplay, setIsCursor }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setObjectToDisplay(activeIndex);
  }, [activeIndex]);
  return (
    <motion.nav
      className="project-navigation"
      initial={{ x: -1000 }}
      animate={{
        x: 0,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{
        x: -1000,
        transition: {
          duration: 0.4,
          delay: 0.45,
        },
      }}
    >
      <ul
        onMouseEnter={() => setIsCursor(false)}
        onMouseLeave={() => setIsCursor(true)}
      >
        {cardsData.map((project, index) => (
          <li
            key={project.name}
            className={index === activeIndex ? 'selected' : ''}
            onClick={() => setActiveIndex(index)}
          >
            {index === activeIndex ? (
              <motion.div className={`upperline ${index}`} layoutId="upperline" />
            ) : null}
            <div className="project-title">
              <p>
                {project.name}
              </p>
              <svg
                viewBox="0 0 512 512"
                color={index === activeIndex ? '#fdfcf2' : '#464444'}
                width="24px"
              >
                <motion.path
                  d="M338.872,470.495H219.255c-5.498,0-10.513-3.146-12.905-8.098c-2.392-4.952-1.74-10.835,1.677-15.142
                  l158.794-200.163c4.917-6.203,13.934-7.241,20.135-2.32c6.202,4.919,7.241,13.934,2.32,20.135L248.919,441.831h83.028L479.371,256
                  L331.948,70.169H248.92l82.886,104.478c4.92,6.202,3.881,15.217-2.32,20.135c-6.199,4.92-15.215,3.881-20.135-2.32L208.029,64.745
                  c-3.418-4.307-4.069-10.19-1.677-15.142c2.392-4.952,7.407-8.098,12.905-8.098h119.617c4.374,0,8.509,1.998,11.228,5.425
                  l158.794,200.163c4.139,5.217,4.139,12.598,0,17.815L350.1,465.069C347.381,468.496,343.246,470.495,338.872,470.495z"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: index === activeIndex ? 1 : 0 }}
                  transition={{ duration: 1.1 }}
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="28"
                />
                <motion.path
                  d="M133.949,470.495H14.332c-5.499,0-10.513-3.146-12.905-8.098c-2.392-4.952-1.74-10.835,1.677-15.142
                  L154.833,256L3.104,64.745c-3.418-4.307-4.069-10.19-1.677-15.142s7.405-8.098,12.905-8.098h119.617
                  c4.374,0,8.509,1.998,11.228,5.425l158.796,200.163c4.139,5.217,4.139,12.598,0,17.815L145.177,465.069
                  C142.458,468.496,138.324,470.495,133.949,470.495z M43.997,441.831h83.028L274.45,256L127.025,70.169H43.997l140.359,176.923
                  c4.139,5.217,4.139,12.598,0,17.815L43.997,441.831z"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: index === activeIndex ? 1 : 0 }}
                  transition={{ duration: 1.1 }}
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="28"
                />
              </svg>
            </div>

            {index === activeIndex ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}

          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
SideMenu.propTypes = {
  setObjectToDisplay: PropTypes.func.isRequired,
  setIsCursor: PropTypes.func.isRequired,
};
export default SideMenu;
