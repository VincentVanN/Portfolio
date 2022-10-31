/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import ParticleImage, {
  Vector,
  forces,
} from 'react-particle-image';

function LogoParticles({ width, height }) {
  const particleOptions = {
    filter: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      return pixel.b > 50;
    },
    color: () => '#000',
    radius: () => Math.random() * (1.5 + 0.8),
    mass: () => 10,
    friction: () => 0.4,
    initialPosition: ({ canvasDimensions }) => new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2),
  };

  const motionForce = (x, y) => forces.disturbance(x, y, 50);
  return (
    <ParticleImage
      src="/react-logo.png"
      width={width}
      height={height}
      scale={1.3}
      entropy={30}
      maxParticles={6000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor=""
    />
  );
}
LogoParticles.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
export default LogoParticles;
