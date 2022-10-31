/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
/* eslint-disable no-mixed-operators */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */

function Canvas({ windowsize }) {
  const { width, height } = windowsize;
  const [mousePos, setMousePos] = useState({});
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const textCoordinatesRef = useRef(null);
  const particleArray = [];
  let ctx;
  //
  //
  const particleFunc = (x, y) => {
    const particle = {
      particleX: x + 200,
      particleY: y - 100,
      particleSize: 2,
      particleBaseX: x + 200,
      particleBaseY: y - 100,
      particleDensity: (Math.random() * 30) + 1,
      particleRandom: Math.random(),
      particleAngle: Math.random() * 2,
    };
    return particle;
  };
  //
  //
  const getClientPos = ({ nativeEvent }) => {
    const { clientX, clientY } = nativeEvent;
    setMousePos({ x: clientX, y: clientY, radius: 150 });
  };
  //
  //
  function init(textCoordinates) {
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
      for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
        // push pixel in array when alpha > 128 (50% because opacity 1 === 255)
        if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
          const positionX = x;
          const positionY = y;
          particleArray.push(particleFunc(positionX * 12, positionY * 12));
        }
      }
    }
  }
  //
  //
  const draw = (ctx, particle) => {
    if (particle.particleRandom > 0.05) {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(particle.particleX, particle.particleY, particle.particleSize, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
    else {
      ctx.save();
      ctx.translate(particle.particleX, particle.particleY);
      ctx.rotate(particle.particleAngle);
      ctx.restore();
    }
  };

  //
  //
  function connect(ctx, particleArray) {
    let opacityValue = 1;
    for (let a = 0; a < particleArray.length; a++) {
      for (let b = a; b < particleArray.length; b++) {
        const distance = (particleArray[a].particleX - particleArray[b].particleX)
          * (particleArray[a].particleX - particleArray[b].particleX)
        + (particleArray[a].particleY - particleArray[b].particleY)
          * (particleArray[a].particleY - particleArray[b].particleY);
        if (distance < 500) {
          opacityValue = 1 - distance / 1500;
          const dx = mousePos.x - particleArray[a].particleX;
          const dy = mousePos.y - particleArray[a].particleY;
          const mouseDistance = Math.sqrt(dx * dx + dy * dy);
          if (mouseDistance < mousePos.radius / 2) {
            ctx.strokeStyle = `rgba(255,255,0, ${opacityValue})`;
          }
          else if (mouseDistance < mousePos.radius - 50) {
            ctx.strokeStyle = `rgba(255,255,140, ${opacityValue})`;
          }
          else if (mouseDistance < mousePos.radius + 20) {
            ctx.strokeStyle = `rgba(255,255,210, ${opacityValue})`;
          }
          else {
            ctx.strokeStyle = `rgba(255,255,255, ${opacityValue})`;
          }
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particleArray[a].particleX, particleArray[a].particleY);
          ctx.lineTo(particleArray[b].particleX, particleArray[b].particleY);
          ctx.stroke();
        }
      }
    }
  }
  //
  //
  const update = (particle) => {
    const dx = mousePos.x - particle.particleX;
    const dy = mousePos.y - particle.particleY;
    const distance = Math.sqrt((dx * dx) + (dy * dy));
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const maxDistance = mousePos.radius;
    let force = (maxDistance - distance) / maxDistance;
    if (force < 0) force = 0;
    const directionX = forceDirectionX * force * particle.particleDensity;
    const directionY = forceDirectionY * force * particle.particleDensity;
    if (distance < mousePos.radius + particle.particleSize) {
      particle.particleX -= directionX;
      particle.particleY -= directionY;
    }
    else {
      if (particle.particleX !== particle.particleBaseX) {
        const dx = particle.particleX - particle.particleBaseX;
        particle.particleX -= dx / 10;
      }
      if (particle.particleY !== particle.particleBaseY) {
        const dy = particle.particleY - particle.particleBaseY;
        particle.particleY -= dy / 10;
      }
    }
  };
  //
  //
  useLayoutEffect(() => {
    const animate = () => {
      if (!canvasRef.current) return;
      // contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      connect(contextRef.current, particleArray);
      for (let i = 0; i < particleArray.length; i++) {
        update(particleArray[i]);
        draw(contextRef.current, particleArray[i]);
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = 'white';
    ctx.font = '80px whoa-filled';
    ctx.fillText('poet', 0, 60);
    contextRef.current = ctx;
    const textCoordinates = contextRef.current.getImageData(0, 0, canvas.width, canvas.height);
    textCoordinatesRef.current = textCoordinates;
    init(textCoordinatesRef.current);
  }, [width, height]);
  //
  //
  return <canvas ref={canvasRef} onMouseMove={getClientPos} />;
}

Canvas.propTypes = {
  windowsize: PropTypes.object,
};
export default Canvas;
