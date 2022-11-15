import { useEffect } from 'react';
import './app.scss';
import { useDispatch } from 'react-redux';
import Router from '../Router/Router';
import {
  setWindowSize,
} from '../../feature/navigation.slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleWindowSize() {
      dispatch(setWindowSize({
        width: window.innerHeight,
        height: window.innerHeight,
      }));
    }

    handleWindowSize();
    window.addEventListener('resize', handleWindowSize);
    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);
  return (
    <Router />
  );
}

// == Export
export default App;
