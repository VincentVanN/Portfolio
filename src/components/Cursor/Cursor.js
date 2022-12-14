import './cursor.scss';
import { motion } from 'framer-motion';
import { isBrowser } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { useMouseMove } from 'react-use-mouse-move';

function Cursor() {
  const { isScale } = useSelector((state) => state.navigation);
  const mouseMouse = useMouseMove(1, 'client');
  return (
    <div>
      {isBrowser && (
      <motion.div
        className="cursor"
        style={{ left: `${mouseMouse.x}px`, top: `${mouseMouse.y}px` }}
        animate={{
          scale: isScale ? 7 : 1,
        }}
      >
        <motion.div
          className="pointer"
          animate={{
            scale: isScale ? 0.15 : 0,
          }}
        />
      </motion.div>
      )}
    </div>

  );
}

export default Cursor;
