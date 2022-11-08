/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Cursor from '../Cursor/Cursor';
import Nav from '../Nav/Nav';
import './about.scss';
import { setIsOnTittle } from '../../feature/navigation.slice';

function About() {
  const dispatch = useDispatch();
  const centralElementRef = useRef(null);
  const [isOnIcon, setIsOnIcon] = useState({ active: false, number: 0 });
  const [isAnimate, setIsAnimate] = useState({ active: false, number: 0 });
  // const { windowSize } = useSelector((state) => state.navigation);
  useEffect(() => () => {
    dispatch(setIsOnTittle({ active: false, tittle: 0 }));
  }, []);
  //
  // variants
  //
  const iconRightVariants = {
    open: {
      x: 800,
      y: -500,
      transition: {
        duration: 0.5,
        position: {
          delay: 0.2,
        },
        top: {
          delay: 0.2,
        },
        right: {
          delay: 0.2,
        },
      },
    },
    init: {
      x: 0,
      y: 0,
    },
  };
  //
  // get size ref and refresh
  //
  const [centralElementSize, setCentralElementSize] = useState({});
  const updateDimensions = () => {
    if (centralElementRef.current) {
      setCentralElementSize({ width: centralElementRef.current.clientWidth, height: centralElementRef.current.clientHeight });
    }
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    setCentralElementSize({ width: centralElementRef.current.clientWidth, height: centralElementRef.current.clientHeight });
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  const imagePath = [
    '/react-logo.png',
    '/about-logo.png',
    '/php-logo.png',
    '/javascript-logo.png',
    'html-logo.png',
    'brain-logo.png',
    'node-logo.png',
    'npm-logo.png',
  ];
  const RADIUS = centralElementSize.width / 2 + 10;
  function getTransform(progress, radius, index, totalItems) {
    const value = (index / totalItems) * progress;

    const x = radius * Math.cos(Math.PI * 2 * (value - 0.25));
    const y = radius * Math.sin(Math.PI * 2 * (value - 0.25));

    const scale = progress / 2 + 0.5;

    return `translate(${x}px, ${y}px) scale(${scale})`;
  }

  return (
    <div className="about-container">
      <Nav />
      <Cursor />
      <div
        className="about-center"
        ref={centralElementRef}
      >
        {imagePath.map((image, index) => (
          <motion.div
            className="about-menuItem"
            key={image}
            style={{
              position: 'absolute',
              width: '5vw',
              height: '5vw',
              borderRadius: '50%',
            }}
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: 1,
              opacity: 1,
            }}
            exit={{ x: 0, opacity: 0 }}
            transformTemplate={({ x }) => {
              const value = parseFloat(x.replace('px', ''));
              return getTransform(value, RADIUS, index, imagePath.length);
            }}
            transition={{
              delay: index * 0.18,
              type: 'spring',
              stiffness: 600,
              damping: 50,
              mass: 1,
            }}
            onMouseEnter={() => setIsOnIcon({ active: true, number: index })}
            onMouseLeave={() => setIsOnIcon({ active: false, number: 0 })}
          >
            <motion.div
              className="about-menuItem-image-container"
              style={{
                width: '5vw',
                height: '5vw',
                borderRadius: '50%',
                background: '#fdfcf2',
              }}
              onClick={() => setIsAnimate({ active: true, number: index })}
              onBlur={() => setIsAnimate({ active: false, number: 0 })}
              animate={isAnimate.active === true && isAnimate.number === index ? 'open' : 'init'}
              initial="init"
              whileTap={{ scale: 0.9, rotate: 45 }}
              variants={iconRightVariants}
            >
              <motion.img
                src={image}
                alt="logo-techno"
                className="about-menuItem-image"
                style={{
                  width: '3vw',
                }}
                animate={{
                  scale: isOnIcon.active && isOnIcon.number === index ? 1.2 : 1,
                }}
              />
            </motion.div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
