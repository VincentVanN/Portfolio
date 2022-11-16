import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsScale } from '../../feature/navigation.slice';
import './footer.scss';

function Footer() {
  const dispatch = useDispatch();
  return (
    <div
      className="footer"
      onMouseOver={() => dispatch(setIsScale(true))}
      onMouseOut={() => dispatch(setIsScale(false))}
    >
      <p>
        Powered with React by Vinc VanN
      </p>
      <a href="https://github.com/VincentVanN/portfolio" target="blank">
        <img className="footer-logo" src="/github-logo.svg" alt="github" />
      </a>
    </div>
  );
}

export default React.memo(Footer);
