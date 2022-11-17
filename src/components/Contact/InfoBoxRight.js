import { motion } from 'framer-motion';

function InfoBoxRight() {
  function onEmailClick() {
    window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL}`);
  }
  return (
    <div className="infoBox-container-right">
      <motion.div
        className="infoBox-logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          damping: 7,
          stiffness: 450,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100px" height="100px">
          <g id="surface133276044">
            <path
              style={{
                stroke: 'none',
                fillRule: 'nonzero',
                fill: 'rgb(99.215686%,98.823529%,94.901961%)',
                fillOpacity: 1,
              }}
              d="M 32 3 C 16 3 3 16 3 32 C 3 48 16 61 32 61 C 48 61 61 48 61 32 C 61 16 48 3 32 3 Z M 32 6 C 46.351562 6 58 17.648438 58 32 C 58 46.351562 46.351562 58 32 58 C 17.648438 58 6 46.351562 6 32 C 6 17.648438 17.648438 6 32 6 Z M 32 15 C 29.515625 15 27.5 17.015625 27.5 19.5 C 27.5 21.984375 29.515625 24 32 24 C 34.484375 24 36.5 21.984375 36.5 19.5 C 36.5 17.015625 34.484375 15 32 15 Z M 32 29.5 C 29.5 29.5 27.5 31.5 27.5 34 L 27.5 46 C 27.5 48.5 29.5 50.5 32 50.5 C 34.5 50.5 36.5 48.5 36.5 46 L 36.5 34 C 36.5 31.5 34.5 29.5 32 29.5 Z M 32 29.5 "
            />
          </g>
        </svg>
      </motion.div>
      <div className="infoBox-content">
        <motion.div className="infoBox-info">
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" width="36">
            <motion.path
              d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
              fill="none"
              stroke="currentColor"
              strokeWidth="32"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 1,
                duration: 0.4,
              }}
            />
            <motion.path
              d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 1,
                duration: 0.4,
              }}
            />
          </svg>
          <p>Vincent Van Nieuwenborgh</p>
        </motion.div>
        <div className="infoBox-info">
          <svg
            viewBox="0 0 512 512"
            width="36"
          >
            <motion.path
              d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80z"
              fill="none"
              stroke="currentColor"
              strokeWidth="32"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 1,
                duration: 0.4,
              }}
            /><motion.path
              d="M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25"
              fill="none"
              stroke="currentColor"
              strokeWidth="32"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 1,
                duration: 0.4,
              }}
            />
          </svg>
          <p
            className="infoBox-email"
            onClick={onEmailClick}
          >
            vinc.vannieu<span className="arobase" />gmail.com
          </p>
        </div>
        <div className="infoBox-info">
          <div className="infoBox-icon-container">
            <svg className="ionicon" viewBox="0 0 512 512" color="#fdfcf2" width="60">
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                stroke="currentColor"
                strokeWidth="32"
              />
            </svg>
          </div>

        </div>
      </div>

    </div>
  );
}

export default InfoBoxRight;
