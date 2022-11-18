/* eslint-disable max-len */
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setIsScale } from '../../feature/navigation.slice';

function InfoBoxRight() {
  const dispatch = useDispatch();
  function onEmailClick() {
    window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL}`);
  }
  return (
    <motion.div
      className="infoBox-container-right"
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
      }}
      exit={{ y: '-100vh' }}
    >
      <div
        className="infoBox-logo"
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
      </div>
      <div className="infoBox-content">
        <motion.div className="infoBox-info">
          <svg
            viewBox="0 0 512 512"
            width="60"
          >
            <motion.path
              d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
              fill="none"
              stroke="currentColor"
              strokeWidth="20"
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
              strokeWidth="20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 1,
                duration: 0.4,
              }}
            />
          </svg>
          <p
            className="infoBox-info-name"
          >
            Vincent Van Nieuwenborgh
          </p>
        </motion.div>
        <div className="infoBox-info">
          <div className="infoBox-icon-container">
            <motion.svg
              viewBox="0 0 512 512"
              width="65"
              className="infoBox-link"
              onClick={onEmailClick}
              whileTap={{
                scale: 0.95,
              }}
              onMouseOver={() => dispatch(setIsScale(true))}
              onMouseOut={() => dispatch(setIsScale(false))}
            >
              <motion.path
                d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80z"
                fill="none"
                stroke="currentColor"
                strokeWidth="20"
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
                strokeWidth="20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.4,
                }}
              />
            </motion.svg>
            <a href="https://github.com/VincentVanN" className="infoBox-link" target="_blank" rel="noreferrer">
              <motion.svg
                viewBox="0 0 512 512"
                color="#fdfcf2"
                width="60"
                whileTap={{
                  scale: 0.95,
                }}
                onMouseOver={() => dispatch(setIsScale(true))}
                onMouseOut={() => dispatch(setIsScale(false))}
              >
                <motion.path
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.4,
                  }}
                />
              </motion.svg>
            </a>
            <a href="https://linkedin.com/in/vincent-van-nieuwenborgh" target="_blank" className="infoBox-link" rel="noreferrer">
              <motion.svg
                viewBox="0 0 512 512"
                color="#fdfcf2"
                width="60"
                whileTap={{
                  scale: 0.95,
                }}
                onMouseOver={() => dispatch(setIsScale(true))}
                onMouseOut={() => dispatch(setIsScale(false))}
              >
                <motion.path
                  d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                  }}
                />
              </motion.svg>
            </a>
            <a href="https://twitter.com/warfielko" target="_blank" className="infoBox-link" rel="noreferrer">
              <motion.svg
                viewBox="0 0 512 512"
                color="#fdfcf2"
                width="60"
                whileTap={{
                  scale: 0.95,
                }}
                onMouseOver={() => dispatch(setIsScale(true))}
                onMouseOut={() => dispatch(setIsScale(false))}
              ><motion.path
                d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
                fill="none"
                stroke="currentColor"
                strokeWidth="20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                }}
              />
              </motion.svg>
            </a>
          </div>
        </div>
        <div className="infoBox-info">
          <p
            className="infoBox-info-info"
          >
            Mon profil vous intéresse et vous souhaitez en savoir plus? Adressez moi un message via le formulaire, email ou Linkedin. Je suis à l'écoute de toutes opportunités professionnelles, sous contrat ou freelance.
          </p>
        </div>
      </div>

    </motion.div>
  );
}

export default InfoBoxRight;
