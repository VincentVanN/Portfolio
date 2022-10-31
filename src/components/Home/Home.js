import './home.scss';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import LogoParticles from '../logoParticles/LogoParticles';

function Home() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);
  }, [ref]);
  return (
    <div className="home-container">
      <div className="home-logo" ref={ref}>
        <LogoParticles width={width} height={height} />
      </div>
      <div className="home-top">
        <div className="home-top-container">
          <div className="home-top-left">
            VinC
          </div>
          <div className="home-top-right">
            VanN
          </div>
        </div>
      </div>

      <div className="home-nav">
        <div className="home-nav-container">
          <div className="home-nav-left">
            <NavLink className="home-nav-link" to="/about">About</NavLink>
            <NavLink className="home-nav-link" to="/realisations">realisations</NavLink>

          </div>
          <div className="home-nav-right">
            <NavLink className="home-nav-link" to="/Curriculum-vitae">Curriculum vitae</NavLink>
            <NavLink className="home-nav-link" to="/contact">Contact</NavLink>
          </div>
        </div>

      </div>
      <div className="home-bottom">
        <div className="home-bottom-container">
          <div className="home-bottom-left">
            Front
          </div>
          <div className="home-bottom-right">
            EnD
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
