/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';

function AnimatedTextWord({ text }) {
  const words = text.split(' ');
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.02 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 10,
      y: -20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        marginBottom: '10px',
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {words.map((word, index) => (
        <motion.span
          className="text"
          variants={child}
          style={{ marginRight: '5px' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
AnimatedTextWord.propTypes = {
  text: PropTypes.string.isRequired,
};
export default React.memo(AnimatedTextWord);
