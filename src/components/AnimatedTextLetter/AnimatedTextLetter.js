/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function AnimatedTextLetter({ text, radiusRef, direction }) {
  const letters = Array.from(text);
  function getTransform(radius, index, totalItems) {
    const value = (index / totalItems);
    const x = radius * Math.cos(Math.PI * 2 * (value - 0.25));
    const y = radius * Math.sin(Math.PI * 2 * (value - 0.25));

    return `translate(${x}px, ${y}px) rotate(${360 / totalItems * index}deg)`;
  }
  return (
    <motion.div
      className="rotate-letter"
      animate={{
        rotate: direction === 'forward' ? 360 : -360,
      }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
      }}
    >
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
          }}
          transformTemplate={() => getTransform(radiusRef, index, letters.length)}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.div>
      ))}
    </motion.div>
  );
}
AnimatedTextLetter.propTypes = {
  text: PropTypes.string.isRequired,
  radiusRef: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
};
export default React.memo(AnimatedTextLetter);
