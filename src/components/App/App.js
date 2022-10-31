import { useEffect, useState } from 'react';
import './app.scss';
import Router from '../Router/Router';

function App() {
  const [windowSize, setWindowSize] = useState({});
  function getWindowWidth() {
    const width = window.innerWidth;
    return width;
  }
  function getWindowHeight() {
    const height = window.innerHeight;
    return height;
  }
  useEffect(() => {
    function handleWindowSize() {
      const sizeObject = {
        width: getWindowWidth(),
        height: getWindowHeight(),
      };
      setWindowSize(sizeObject);
    }
    window.addEventListener('resize', handleWindowSize);
  }, []);
  return (
    <Router windowsize={windowSize} />
  );
}

// == Export
export default App;
