import './cursor.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useMouseMove } from 'react-use-mouse-move';

function Cursor() {
  const { isScale } = useSelector((state) => state.navigation);
  const mouseMouse = useMouseMove(1, 'client');
  return (
    <motion.div
      className="cursor"
      style={{ left: `${mouseMouse.x}px`, top: `${mouseMouse.y}px` }}
      animate={{
        scale: isScale ? 7 : 1,
      }}
    />
  );
}

export default Cursor;
