/* eslint-disable no-mixed-operators */
import './home.scss';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import LogoParticles from '../logoParticles/LogoParticles';

function Home() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnSpan, setIsOnSpan] = useState({ active: false, span: 0 });
  const [displayLogo, setDisplayLogo] = useState(false);
  const editCursor = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);
  }, [ref]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayLogo(true);
    }, 1200);
    return () => {
      clearTimeout(timer);
      setDisplayLogo(false);
    };
  }, []);
  const topLeftVariants = {
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        y: { delay: 0.1 },
      },
    },
    close: {
      x: -800,
      transition: {
        duration: 0.2,
      },
    },
    init: {
      y: -500,
    },
  };
  const topRightVariants = {
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        y: { delay: 0.1 },
      },
    },
    close: {
      x: 1000,
      transition: {
        duration: 0.2,
      },
    },
    init: {
      y: -500,
    },
  };
  const bottomLeftVariants = {
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        y: { delay: 0.6 },
      },
    },
    close: {
      x: 800,
      transition: {
        duration: 0.2,
      },
    },
    init: {
      y: -500,
    },
  };
  const bottomRightVariants = {
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        y: { delay: 0.6 },
      },
    },
    close: {
      x: -1000,
      transition: {
        duration: 0.2,
      },
    },
    init: {
      y: -500,
    },
  };
  return (

    <div className="home-container" onMouseMove={editCursor}>
      <motion.div
        className="home-logo"
        ref={ref}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0.4,
        }}
      >
        {displayLogo && (<LogoParticles width={width} height={height} />)}
      </motion.div>
      <div className="home-top">
        <div className="home-top-container">
          <motion.div
            className="home-top-left"
            initial="init"
            animate="open"
            exit="close"
            variants={topLeftVariants}
          >
            VinC
          </motion.div>
          <motion.div
            className="home-top-right"
            initial="init"
            animate="open"
            exit="close"
            variants={topRightVariants}
          >
            VanN
          </motion.div>
        </div>
      </div>

      <motion.div
        className="home-nav"
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
        <motion.div className="home-nav-container">
          <motion.div
            className="home-nav-left"
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.5,
              x: { delay: 1 },
            }}
          >
            <NavLink
              className="home-nav-link"
              to="/about"
              onMouseEnter={() => setIsOnSpan({ active: true, span: 1 })}
              onMouseLeave={() => setIsOnSpan({ active: false, span: 0 })}
              {...((isOnSpan.active && isOnSpan.span === 1) && { style: { transform: 'rotateZ(180deg)', transition: 'transform 0.3s' } })}
            >
              <span>
                About
              </span>
            </NavLink>
            <NavLink
              className="home-nav-link"
              to="/realisations"
              onMouseEnter={() => setIsOnSpan({ active: true, span: 2 })}
              onMouseLeave={() => setIsOnSpan({ active: false, span: 0 })}
              {...((isOnSpan.active && isOnSpan.span === 2) && { style: { transform: 'rotateZ(180deg)', transition: 'transform 0.3s' } })}
            >
              <span>realisations
              </span>
            </NavLink>
          </motion.div>
          <div className="home-nav-center">
            <NavLink
              className="home-nav-link"
              to="/"
              onMouseEnter={() => setIsOnSpan({ active: true, span: 3 })}
              onMouseLeave={() => setIsOnSpan({ active: false, span: 0 })}
              {...((isOnSpan.active && isOnSpan.span === 3) && { style: { transform: 'rotateZ(180deg)', transition: 'transform 0.3s' } })}
            >
              <span>
                Accueil
              </span>
            </NavLink>
          </div>
          <motion.div
            className="home-nav-right"
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.5,
              x: { delay: 1 },
            }}
          >
            <NavLink
              className="home-nav-link"
              to="/Curriculum-vitae"
              onMouseEnter={() => setIsOnSpan({ active: true, span: 4 })}
              onMouseLeave={() => setIsOnSpan({ active: false, span: 0 })}
              {...((isOnSpan.active && isOnSpan.span === 4) && { style: { transform: 'rotateZ(180deg)', transition: 'transform 0.3s' } })}
            >
              <span>
                Curriculum Vitae
              </span>
            </NavLink>
            <NavLink
              className="home-nav-link"
              to="/contact"
              onMouseEnter={() => setIsOnSpan({ active: true, span: 5 })}
              onMouseLeave={() => setIsOnSpan({ active: false, span: 0 })}
              {...((isOnSpan.active && isOnSpan.span === 5) && { style: { transform: 'rotateZ(180deg)', transition: 'transform 0.3s' } })}
            >
              <span>
                Contact
              </span>
            </NavLink>
          </motion.div>
          <div className="cursor" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: isOnSpan.active ? 'translate(-50%, -50%) scale(7)' : '' }} />
        </motion.div>
      </motion.div>
      <div className="home-bottom">
        <div className="home-bottom-container">
          <motion.div
            className="home-bottom-left"
            initial="init"
            animate="open"
            exit="close"
            variants={bottomRightVariants}
          >
            Front
          </motion.div>
          <motion.div
            className="home-bottom-right"
            initial="init"
            animate="open"
            exit="close"
            variants={bottomLeftVariants}
          >
            EnD
          </motion.div>
        </div>
      </div>
    </div>

  );
}
export default Home;
