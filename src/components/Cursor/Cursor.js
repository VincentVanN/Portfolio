import './cursor.scss';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Cursor() {
  const [globalMousePos, setGlobalMousePos] = useState({});
  const { isScale } = useSelector((state) => state.navigation);
  useEffect(() => {
    const handleMouseMove = (event) => {
      setGlobalMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <motion.div
      className="cursor"
      style={{ left: `${globalMousePos.x}px`, top: `${globalMousePos.y}px`}}
      animate={{
        // transform: isScale ? 'translate(-50%, -50%) scale(8)' : '',
        scale: isScale ? 8 : 1,
      }}
    />
  );
}
export default Cursor;
