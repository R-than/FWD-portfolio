import React, { useState, useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    console.clear();

    // Select the circle element
    const circleElement = document.querySelector('.circle');
    // Select the dot cursor element
    const dotCursor = document.querySelector('.cursor-dot');

    // Create objects to track mouse position and custom cursor position
    const mouse = { x: 0, y: 0 }; // Track current mouse position
    const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
    const circle = { x: 0, y: 0 }; // Track the circle position

    // Initialize variables to track scaling and rotation
    let currentScale = 0; // Track current scale value
    let currentAngle = 0; // Track current angle value

    // Update mouse position on the 'mousemove' event
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Move the dot cursor to the current mouse position
      dotCursor.style.left = `${mouse.x}px`;
      dotCursor.style.top = `${mouse.y}px`;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
    const speed = 0.14;

    // Animation loop
    const tick = () => {
        
      // MOVE
      // Calculate circle movement based on mouse position and smoothing
      const offsetX = -12; // Adjust this value to change the horizontal offset
      const offsetY = -12; // Adjust this value to change the vertical offset

      circle.x += (mouse.x - circle.x + offsetX) * speed;
      circle.y += (mouse.y - circle.y + offsetY) * speed;
      // Create a transformation string for cursor translation
      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      // SQUEEZE
      // 1. Calculate the change in mouse position (deltaMouse)
      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;
      // Update previous mouse position for the next frame
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;
      // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
      const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
      // 3. Convert mouse velocity to a value in the range [0, 0.5]
      const scaleValue = (mouseVelocity / 150) * 0.5;
      // 4. Smoothly update the current scale
      currentScale += (scaleValue - currentScale) * speed;
      // 5. Create a transformation string for scaling
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      // ROTATE
      // 1. Calculate the angle using the atan2 function
      const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
      // 2. Check for a threshold to reduce shakiness at low mouse velocity
      if (mouseVelocity > 20) {
        currentAngle = angle;
      }
      // 3. Create a transformation string for rotation
      const rotateTransform = `rotate(${currentAngle}deg)`;

      // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
      circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      // Request the next frame to continue the animation
      window.requestAnimationFrame(tick);
    };

    // Start the animation loop
    tick();

    // Clean up function
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












