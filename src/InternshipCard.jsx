import React from 'react';
import './InternshipCard.css';

function getFullAreaTilt(x, y, width, height) {
  // Calculate the offset from the center
  const centerX = width / 2;
  const centerY = height / 2;
  const maxTilt = 10; // degrees
  // Normalize x/y to [-1, 1]
  const normX = (y - centerY) / centerY;
  const normY = (x - centerX) / centerX;

  // Invert Y for natural tilt
  const rotateX = normX * maxTilt;
  const rotateY = -normY * maxTilt;
  const scale = 1.04;
  return { rotateX, rotateY, scale };
}

function InternshipCard({ image, title, subtitle, description, buttonText }) {
  const [tilt, setTilt] = React.useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [isHovering, setIsHovering] = React.useState(false);

  function handleMove(e) {
    setIsHovering(true);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const { rotateX, rotateY, scale } = getFullAreaTilt(x, y, rect.width, rect.height);
    setTilt({ rotateX, rotateY, scale });
  }

  function handleLeave() {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  }

  return (
    <div
      className="internship-card"
      style={{
        userSelect: 'auto',
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        transition: isHovering ? 'none' : 'transform 0.5s',
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="internship-card-image-wrapper">
        <img src={image} alt={title} className="internship-card-image" />
      </div>
      <div className="internship-card-content">
        <h3 className="internship-card-title">{title}</h3>
        {subtitle && <div className="internship-card-subtitle">{subtitle}</div>}
        <p className="internship-card-description">{description}</p>
        <button className="internship-card-button">{buttonText}</button>
      </div>
    </div>
  );
}

export default InternshipCard; 