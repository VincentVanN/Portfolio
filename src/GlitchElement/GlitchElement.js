import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function GlitchElement({
  text, position = null, element, focus = null,
}) {
  const { title } = useSelector((state) => state.navigation);
  const disable = () => {
    if (element === 'nav') {
      return (!(position === title));
    }
    return !focus;
  };
  return (
    <div>
      <GlitchClip
        component={element === 'nav' ? 'h2' : 'p'}
        disabled={disable()}
        duration={6500}
        onHover={element === 'nav'}
      >
        {text}
      </GlitchClip>
    </div>
  );
}
GlitchElement.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.number,
  focus: PropTypes.bool,
  element: PropTypes.string.isRequired,
};
GlitchElement.defaultProps = {
  position: null,
  focus: null,
};
export default GlitchElement;
