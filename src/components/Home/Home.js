import PropTypes from 'prop-types';
import './home.scss';
import Canvas from '../Canvas/Canvas';

function Home({ windowSize }) {
  return (
    <div className="home-container">
      <div className="home-top">
        <Canvas windowSize={windowSize} />
      </div>
      <div className="home-nav">nav</div>
      <div className="home-bottom">bottom</div>
    </div>
  );
}
Home.propTypes = {
  windowSize: PropTypes.object.isRequired,
};
export default Home;
