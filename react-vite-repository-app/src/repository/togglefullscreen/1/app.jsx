import React, { useRef } from 'react';
import './style.css';

const CustomApp = () => {
    // Create a ref for the element you want to make fullscreen
  const elementRef = useRef(null);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      // Use the ref to access the DOM element and request fullscreen
      elementRef.current.requestFullscreen();
    }
  };
  return (
    <div>
      {/* This is the element we want to display in fullscreen */}
      <div ref={elementRef} className="element" style={{ padding: '20px', marginBottom: '10px'}}>
        This element will go fullscreen.
      </div>
      {/* Button to toggle fullscreen */}
      <button className="toggle" onClick={toggleFullscreen}>
        Toggle Fullscreen
      </button>
    </div>
  )
}

export default CustomApp
