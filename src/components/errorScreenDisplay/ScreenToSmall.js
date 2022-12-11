/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import GlitchElement from '../../GlitchElement/GlitchElement';
import './errorScreenDisplay.scss';

function ScreenToSmall() {
  const { windowSize } = useSelector((state) => state.navigation);
  return (
    <div className="screenToSmall-container">
      <div className="screenToSmall">
        <div className="top">
          <GlitchElement text="VinC" element="screenToSmall" focus />
          <GlitchElement text="VanN" element="screenToSmall" focus />
        </div>
        <div className="center">
          <p>{`Votre ecran a une resolution de ${windowSize.width} x ${windowSize.height} pixels.`}</p>
          <p>Pour une meilleure experience, ce portfolio a ete concu pour un affichage superieur a 1024 x 768 pixels.</p>
        </div>
        <div className="bottom">
          <GlitchElement text="Front" element="screenToSmall" focus />
          <GlitchElement text="End" element="screenToSmall" focus />
        </div>
      </div>
    </div>

  );
}

export default ScreenToSmall;
