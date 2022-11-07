import './cursor.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Cursor() {
  const [globalMousePos, setGlobalMousePos] = useState({});
  const { isOnTittle } = useSelector((state) => state.navigation);
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
    <div className="cursor" style={{ left: `${globalMousePos.x}px`, top: `${globalMousePos.y}px`, transform: isOnTittle.active ? 'translate(-50%, -50%) scale(8)' : '' }} />
  );
}
export default Cursor;
