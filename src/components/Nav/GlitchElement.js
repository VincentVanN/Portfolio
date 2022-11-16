import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function GlitchElement({ text, position }) {
  const { title } = useSelector((state) => state.navigation);
  return (
    <div>
      <GlitchClip component="h2" disabled={!(position === title)} duration={3500} color1="#C2C5C7" color2="#494647">
        {text}
      </GlitchClip>
    </div>
  );
}
GlitchElement.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
};
export default GlitchElement;
