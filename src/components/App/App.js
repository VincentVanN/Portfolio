import { useEffect } from 'react';
import './app.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Router from '../Router/Router';
import {
  setIsScale,
  setPageToGo,
  setTitlePosition,
  setWindowSize,
} from '../../feature/navigation.slice';
import { navData } from '../Nav/navData';
import ScreenToSmall from '../errorScreenDisplay/ScreenToSmall';
import RotateScreen from '../errorScreenDisplay/RotateScreen';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { pageToGo } = useSelector((state) => state.navigation);
  const { windowSize } = useSelector((state) => state.navigation);
  useEffect(() => {
    function handleWindowSize() {
      dispatch(setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }
    handleWindowSize();
    window.addEventListener('resize', handleWindowSize);
    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);
  useEffect(() => {
    dispatch(setPageToGo(''));
  }, []);
  useEffect(() => {
    if (pageToGo === location.pathname) {
      dispatch(setIsScale(false));
    }
    navData.forEach((element) => {
      element.link.forEach((link) => {
        if (location.pathname === link.path) {
          dispatch(setTitlePosition(link.position));
        }
      });
    });
  }, [location]);
  if (windowSize.width < 1024 && windowSize.height < 1024) {
    return <ScreenToSmall />;
  }
  if (windowSize.width < 1024 && windowSize.height >= 1024) {
    return <RotateScreen />;
  }
  return (
    <Router />
  );
}

// == Export
export default App;
