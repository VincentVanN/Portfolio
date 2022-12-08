/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Cursor from '../Cursor/Cursor';
import './about.scss';
import { imagePath, technoText } from './aboutData';
import AnimatedTextWords from '../AnimatedTextWords/animatedTextWords';
import { setIsScale } from '../../feature/navigation.slice';

function About() {
  const dispatch = useDispatch();
  const { pageToGo } = useSelector((state) => state.navigation);
  const centralElementRef = useRef(null);
  const iconDestinationRef = useRef(null);
  const allIconsRef = useRef([]);
  const [isOnIcon, setIsOnIcon] = useState({ active: false, number: 0 });
  const [isAnimate, setIsAnimate] = useState({ active: false, number: null });
  const [position, setPosition] = useState([]);
  const [secondaryIconPosition, setSecondaryIconPosition] = useState({});
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  //
  // get movement position for animation
  //
  useEffect(() => {
    const allIconsElements = document.querySelectorAll('.about-menuItem');
    const ArrayIconsPosition = [];
    const movement = [];
    if (isAnimationComplete) {
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
    }
  }, [isAnimationComplete]);
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
      <Cursor />
      <div
        className="about-iconPosition one"
        ref={iconDestinationRef}
      />
      {isAnimate.active && (
      <>
        <motion.div
          className="about-menuItem-image-container"
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
        >
          <img
            src={imagePath[isAnimate.number].scd}
            alt="logo-techno"
            className="about-menuItem-image"
            style={{
              width: '3vw',
              zIndex: 5,
            }}
          />
        </motion.div>
        <motion.div
          className="about-menuItem-image-container"
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
        >
          <img
            src={imagePath[isAnimate.number].thr}
            alt="logo-techno"
            className="about-menuItem-image"
            style={{
              width: '3vw',
              objectFit: 'cover',
              zIndex: 5,
            }}
          />
        </motion.div>
      </>
      )}

      <motion.div
        className="about-center"
        ref={centralElementRef}
        exit={{
          left: pageToGo === '/contact' ? '25%' : '50%',
          opacity: pageToGo === '/contact' ? 0 : 1,
          transition: {
            duration: 0.4,
            delay: 1,
          },
        }}
      >
        {imagePath.map((image, index) => (
          <motion.div
            className="about-menuItem"
            key={image.first}
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
              const value = parseFloat(x.toString().replace('px', ''));
              return getTransform(value, RADIUS, index, imagePath.length);
            }}
            transition={{
              delay: index * 0.12,
              type: 'spring',
              stiffness: 600,
              damping: 50,
              mass: 1,
            }}
            onAnimationComplete={() => {
              if (index === 7) {
                setIsAnimationComplete(true);
              }
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
              onClick={() => {
                if (isAnimationComplete) {
                  setIsAnimate({ active: true, number: index });
                }
              }}
              onBlur={() => {
                if (isAnimationComplete) {
                  setIsAnimate({ active: false, number: null });
                }
              }}
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
                src={image.first}
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
      </motion.div>
      {isAnimate.active && (
        <div className="about-text-container-general">
          <div
            className="about-text-container first"
            onMouseEnter={() => dispatch(setIsScale(true))}
            onMouseLeave={() => dispatch(setIsScale(false))}
          >
            {technoText[isAnimate.number].first.map((text, index) => <AnimatedTextWords key={index + text} text={text} />)}
          </div>
          <div
            className="about-text-container"
            onMouseEnter={() => dispatch(setIsScale(true))}
            onMouseLeave={() => dispatch(setIsScale(false))}
          >
            {technoText[isAnimate.number].scd.map((text, index) => <AnimatedTextWords key={index + text} text={text} />)}
          </div>
          <div
            className="about-text-container"
            onMouseEnter={() => dispatch(setIsScale(true))}
            onMouseLeave={() => dispatch(setIsScale(false))}
          >
            {technoText[isAnimate.number].thr.map((text, index) => <AnimatedTextWords key={index + text} text={text} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(About);
