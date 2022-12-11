import './errorScreenDisplay.scss';
import { motion } from 'framer-motion';

function RotateScreen() {
  return (
    <div className="rotateScreen-container">
      <div
        className="rotateScreen"
      >
        Tournez votre ecran.
      </div>
      <motion.div
        className="animation"
        animate={{
          rotate: [0, 90],
        }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 1.3,
        }}
      >
        <div className="arrow-top">
          <svg viewBox="0 0 512 512" color="#fdfcf2"><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="none" stroke="currentColor" strokeWidth="32" /></svg>
        </div>
        <div className="phone"><svg viewBox="0 0 512 512" color="#fdfcf2"><rect x="128" y="16" width="256" height="480" rx="48" ry="48" fill="none" stroke="currentColor" strokeWidth="32" /><path d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24" fill="none" stroke="currentColor" strokeWidth="32" /></svg></div>
        <div className="arrow-bottom">
          <svg viewBox="0 0 512 512" color="#fdfcf2"><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="none" stroke="currentColor" strokeWidth="32" /></svg>
        </div>
      </motion.div>
    </div>

  );
}

export default RotateScreen;
