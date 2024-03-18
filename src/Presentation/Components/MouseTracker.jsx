// MouseTracker.js
import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import './MouseTracker.css';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 16); // Adjust the throttle interval (in milliseconds)

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="mouse-tracker">
      <div className="cursor" style={{ left: position.x-10, top: position.y -10}}></div>
    </div>
  );
};

export default MouseTracker;
