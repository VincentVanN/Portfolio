/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Cursor from '../Cursor/Cursor';
import Nav from '../Nav/Nav';
import './about.scss';

function About() {
  const centralElementRef = useRef(null);
  const iconDestinationRef = useRef(null);
  const allIconsRef = useRef([]);
  const [isOnIcon, setIsOnIcon] = useState({ active: false, number: 0 });
  const [isAnimate, setIsAnimate] = useState({ active: false, number: null });
  const [position, setPosition] = useState([]);
  const [secondaryIconPosition, setSecondaryIconPosition] = useState({});
  //
  // get movement position for animation
  //
  useEffect(() => {
    const allIconsElements = document.querySelectorAll('.about-menuItem');
    const ArrayIconsPosition = [];
    const movement = [];
    if (iconDestinationRef.current) {
      setTimeout(() => {
        allIconsElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          ArrayIconsPosition.push(rect);
        });
        ArrayIconsPosition.forEach((element) => {
          movement.push({
            x: (iconDestinationRef.current.offsetLeft - (element.left + (element.width / 2))),
            y: (iconDestinationRef.current.offsetTop - (element.top + (element.height / 2))),
          });
        });
        setPosition(movement);
        setSecondaryIconPosition({
          top: iconDestinationRef.current.offsetTop - (ArrayIconsPosition[1].width / 2),
          left: iconDestinationRef.current.offsetLeft - (ArrayIconsPosition[1].width / 2),
        });
      }, 1600);
    }
  }, [iconDestinationRef]);
  //
  // get element for resizing
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
  console.log(secondaryIconPosition);
  return (
    <div className="about-container">
      <Nav />
      <Cursor />
      <div
        className="about-iconPosition one"
        ref={iconDestinationRef}
      />
      <motion.div
        className="about-iconPosition two"
        style={{
          position: 'absolute',
          width: '5vw',
          height: '5vw',
          top: secondaryIconPosition.top,
          left: secondaryIconPosition.left,
          borderRadius: '50%',
          background: '#fdfcf2',
          zIndex: -1,
          visibility: 'hidden',
        }}
        animate={isAnimate.active ? {
          top: '45%',
          zIndex: 2,
          visibility: 'visible',
          transition: {
            delay: 0.5,
            type: 'spring',
            damping: 12,
            stiffness: 100,
          },
        }
          : {
            x: 0,
            y: 0,
          }}
      />
      <motion.div
        className="about-iconPosition three"
        style={{
          position: 'absolute',
          width: '5vw',
          height: '5vw',
          top: secondaryIconPosition.top,
          left: secondaryIconPosition.left,
          borderRadius: '50%',
          background: '#fdfcf2',
          zIndex: -1,
          visibility: 'hidden',
        }}
        animate={isAnimate.active ? {
          top: '68%',
          zIndex: 2,
          visibility: 'visible',
          transition: {
            delay: 0.5,
            type: 'spring',
            damping: 12,
            stiffness: 100,
          },
        }
          : {
            x: 0,
            y: 0,
          }}
      />
      <div
        className="about-center"
        ref={centralElementRef}
      >
        {imagePath.map((image, index) => (
          <motion.div
            className="about-menuItem"
            key={image}
            ref={(element) => {
              allIconsRef.current[index] = element;
            }}
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
              delay: index * 0.12,
              type: 'spring',
              stiffness: 600,
              damping: 50,
              mass: 1,
            }}
            onMouseEnter={() => setIsOnIcon({ active: true, number: index })}
            onMouseLeave={() => setIsOnIcon({ active: false, number: 0 })}
          >
            <motion.button
              className="about-menuItem-image-container"
              style={{
                position: 'absolute',
                width: '5vw',
                height: '5vw',
                borderRadius: '50%',
                background: '#fdfcf2',
                zIndex: 5,
              }}
              onClick={() => setIsAnimate({ active: true, number: index })}
              onBlur={() => setIsAnimate({ active: false, number: null })}
              animate={
                isAnimate.active && isAnimate.number === index
                  ? {
                    x: parseInt(position[index].x, 10),
                    y: parseInt(position[index].y, 10),
                    transition: {
                      type: 'spring',
                      damping: 12,
                      stiffness: 100,
                    },
                  }
                  : {
                    x: 0,
                    y: 0,
                  }
                }
              whileTap={{ scale: 0.9, rotate: 45 }}
            >
              <motion.img
                src={image}
                alt="logo-techno"
                className="about-menuItem-image"
                style={{
                  width: '3vw',
                  zIndex: 5,
                }}
                animate={{
                  scale: isOnIcon.active && isOnIcon.number === index ? 1.2 : 1,
                }}
              />
            </motion.button>

          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
