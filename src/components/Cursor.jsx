import React, { useState, useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    console.clear();

    const circleElement = document.querySelector('.circle');

    const dotCursor = document.querySelector('.cursor-dot');

    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 }; 
    const circle = { x: 0, y: 0 }; 

    let currentScale = 0;
    let currentAngle = 0; 

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      dotCursor.style.left = `${mouse.x}px`;
      dotCursor.style.top = `${mouse.y}px`;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Cursor movement speed (0 = smoother, 1 = instant)
    const speed = 0.14;

    const tick = () => {
        

      const offsetX = -12;
      const offsetY = -12;

      circle.x += (mouse.x - circle.x + offsetX) * speed;
      circle.y += (mouse.y - circle.y + offsetY) * speed;

      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;

      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;

      const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);

      const scaleValue = (mouseVelocity / 150) * 0.5;

      currentScale += (scaleValue - currentScale) * speed;

      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;

      if (mouseVelocity > 20) {
        currentAngle = angle;
      }
      const rotateTransform = `rotate(${currentAngle}deg)`;

      circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot mix-blend-difference"></div>
      <div className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference ">
        <div className="circle h-8 w-8 border-2 border-yellow rounded-full bg-gradient-to-br to-orange-300 shadow-lg ring-2 ring-yellow-500 animate-pulse mix-blend-difference "></div>
      </div>
    </>
  );
};

export default Cursor;