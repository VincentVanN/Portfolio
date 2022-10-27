import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
/* eslint-disable no-mixed-operators */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
function Canvas(props) {
  const [mousePos, setMousePos] = useState({});
  const canvasRef = useRef(null);
  let particleArray = [];
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
  function init(textCoordinates, adjustX, adjustY) {
    particleArray = [];
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
      for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
        // push pixel in array when alpha > 128 (50% because opacity 1 === 255)
        if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
          const positionX = x + adjustX;
          const positionY = y + adjustY;
          particleArray.push(particleFunc(positionX * 12, positionY * 12));
        }
      }
    }
  }
  function connect(ctx) {
    let opacityValue = 1;
    for (let a = 0; a < particleArray.length; a++) {
      for (let b = a; b < particleArray.length; b++) {
        const distance = (particleArray[a].x - particleArray[b].x)
            * (particleArray[a].x - particleArray[b].x)
          + (particleArray[a].y - particleArray[b].y)
            * (particleArray[a].y - particleArray[b].y);

        if (distance < 1500) {
          opacityValue = 1 - distance / 1500;
          const dx = mousePos.x - particleArray[a].x;
          const dy = mousePos.y - particleArray[a].y;
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
          ctx.moveTo(particleArray[a].x, particleArray[a].y);
          ctx.lineTo(particleArray[b].x, particleArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //
    const adjustX = canvas.width / 200;
    const adjustY = canvas.height / 200;
    ctx.fillStyle = 'white';
    ctx.font = '120px whoa-filled';
    ctx.fillText('poet', 0, 40);
    function animate() {
      ctx.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
      connect(ctx);
      for (let i = 0; i < particleArray.length; i++) {
        update(particleArray[i]);
        draw(particleArray[i]);
      }
      requestAnimationFrame(animate);
    }
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY, radius: 150 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    init(textCoordinates, adjustX, adjustY);
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}
Canvas.propTypes = {
  windowSize: PropTypes.object.isRequired,
};
export default Canvas;
