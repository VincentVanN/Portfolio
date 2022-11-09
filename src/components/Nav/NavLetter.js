import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

function NavLetter({ letter, delay, position }) {
  const { title } = useSelector((state) => state.navigation);

  return (
    <motion.div
      className="nav-letter"
      animate={{ rotateZ: title === position ? 180 : 0 }}
      transition={{
        delay: delay / 10,
      }}
    >
      {letter}
    </motion.div>
  );
}
NavLetter.propTypes = {
  letter: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
};
export default NavLetter;
