/* eslint-disable no-mixed-operators */
import './home.scss';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import LogoParticles from '../logoParticles/LogoParticles';
import Cursor from '../Cursor/Cursor';
import {
  homeBottomLeftVariants,
  homeBottomRightVariants,
  centerVariants,
  homeTopLeftVariants,
  homeTopRightVariants,
} from '../../variants/variants';

function Home() {
  const { pageToGo } = useSelector((state) => state.navigation);
  const ref = useRef(null);
  const [size, setSize] = useState({});
  const [displayLogo, setDisplayLogo] = useState(false);

  const updateDimensions = () => {
    if (ref.current) {
      setDisplayLogo(false);
      setSize({ width: ref.current.clientWidth, height: ref.current.clientHeight });
      setDisplayLogo(true);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    setSize({ width: ref.current.clientWidth, height: ref.current.clientHeight });
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayLogo(true);
    }, 300);
    return () => {
      clearTimeout(timer);
      setDisplayLogo(false);
    };
  }, []);
  return (

    <div className="home-container">
      <motion.div
        className="home-logo"
        ref={ref}
        exit={() => {
          if (pageToGo === '/about') {
            return 'homeExitAbout';
          }
          if (pageToGo === '/realisations') {
            return '';
          }
          return 'other';
        }}
        variants={centerVariants}
      >
        <motion.div
          className="home-center-image"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: pageToGo === '/about' ? 1 : 0,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <img src="Me.png" alt="" />
        </motion.div>
        {pageToGo !== '/about' && (
          <motion.div
            className="home-logo-container"
            exit={{ opacity: 0 }}
          >
            {displayLogo && (<LogoParticles width={size.width} height={size.height} currentImage="/react-logo.png" />)}
          </motion.div>
        )}

      </motion.div>
      <div className="home-top">
        <div className="home-top-container">
          <motion.div
            className="home-top-left"
            initial="init"
            animate="open"
            exit="close"
            variants={homeTopLeftVariants}
          >
            VinC
          </motion.div>
          <motion.div
            className="home-top-right"
            initial="init"
            animate="open"
            exit="close"
            variants={homeTopRightVariants}
          >
            VanN
          </motion.div>
        </div>
      </div>
      <div className="home-bottom">
        <div className="home-bottom-container">
          <motion.div
            className="home-bottom-left"
            initial="init"
            animate="open"
            exit="close"
            variants={homeBottomRightVariants}
          >
            Front
          </motion.div>
          <motion.div
            className="home-bottom-right"
            initial="init"
            animate="open"
            exit="close"
            variants={homeBottomLeftVariants}
          >
            EnD
          </motion.div>
        </div>
      </div>
      <Cursor />
    </div>

  );
}
export default Home;
