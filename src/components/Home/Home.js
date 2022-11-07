/* eslint-disable no-mixed-operators */
import './home.scss';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import LogoParticles from '../logoParticles/LogoParticles';
import Cursor from '../Cursor/Cursor';
import Nav from '../Nav/Nav';
import {
  homeBottomLeftVariants,
  homeBottomRightVariants,
  homeTopLeftVariants,
  homeTopRightVariants,
} from '../../variants/variants';

function Home() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [displayLogo, setDisplayLogo] = useState(false);
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
  return (

    <div className="home-container">
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
      <Nav />
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
