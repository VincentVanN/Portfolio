import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { setIsScale, setPageToGo } from '../../feature/navigation.slice';
import Cursor from '../Cursor/Cursor';
import Nav from '../Nav/Nav';
import SideMenu from '../SideMenu/SideMenu';
import './achievement.scss';
import Card from './Card';
import { centerVariants } from '../../variants/variants';

function Achievement() {
  const { pageToGo } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();
  const [objectToDisplay, setObjectToDisplay] = useState(0);
  const [isCursor, setIsCursor] = useState(true);
  useEffect(() => () => {
    dispatch(setIsScale(false));
    dispatch(setPageToGo(''));
  }, []);
  return (
    <div className="achievement-container">
      <Nav />
      {pageToGo && (
        <motion.div
          className="achievement-center"
          exit={() => {
            if (pageToGo === '/about') {
              return 'about';
            }
            if (pageToGo === '/' || !pageToGo) {
              return 'home';
            }
            return 'other';
          }}
          variants={centerVariants}
        />
      )}
      {isCursor && (
        <Cursor />
      )}
      <SideMenu setObjectToDisplay={setObjectToDisplay} setIsCursor={setIsCursor} />
      {!pageToGo && (
        <Card objectToDisplay={objectToDisplay} />
      )}
    </div>
  );
}

export default Achievement;
