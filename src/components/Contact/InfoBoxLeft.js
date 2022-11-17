import { motion } from 'framer-motion';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useDispatch } from 'react-redux';
import Maps from '../Maps/Maps';
import { setIsScale } from '../../feature/navigation.slice';

function InfoBoxLeft() {
  const dispatch = useDispatch();
  const render = (statusMap) => {
    if (statusMap === Status.FAILURE) return <div>erreur!</div>;
    return <div>loading...</div>;
  };
  return (
    <div className="infoBox-container-left">
      <motion.div
        className="infoBox-location"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          damping: 7,
          stiffness: 450,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="contactIcon"
          color="#fdfcf2"
        >
          <motion.path
            d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
            fill="none"
            stroke="currentColor"
            strokeWidth="32"
          /><motion.circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
        </svg>
      </motion.div>
      <div className="infoBox-location-title">
        <p>localisation: Mons, Belgique.</p>
      </div>
      <motion.div
        className="infoBox-mapsContainer"
        onMouseOver={() => dispatch(setIsScale(true))}
        onMouseOut={() => dispatch(setIsScale(false))}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} render={render}>
          <Maps />
        </Wrapper>
      </motion.div>
    </div>
  );
}

export default InfoBoxLeft;
