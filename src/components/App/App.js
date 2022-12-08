import { useEffect } from 'react';
import './app.scss';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import Router from '../Router/Router';
import {
  setIsScale,
  setPageToGo,
  setTitlePosition,
  setWindowSize,
} from '../../feature/navigation.slice';
import { navData } from '../Nav/navData';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
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
    dispatch(setIsScale(false));
    dispatch(setPageToGo(''));
  }, []);
  useEffect(() => {
    navData.forEach((element) => {
      element.link.forEach((link) => {
        if (location.pathname === link.path) {
          dispatch(setTitlePosition(link.position));
        }
      });
    });
  }, [location]);
  return (
    <Router />
  );
}

// == Export
export default App;
