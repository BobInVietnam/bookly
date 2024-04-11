'use client'
import { useRef } from "react";

export default function MousePosDetector() {
  // Create a ref using useRef
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Access and log the value property of the input element
    if (inputRef.current) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight, type } = inputRef.current;
      console.log('Position:', { offsetTop, offsetLeft });
      console.log('Size:', { offsetWidth, offsetHeight });
      console.log('Type', {type});
    }
  }

  return (
    <div>
      {/* Input element with ref */}
      <input type="text" ref={inputRef} />

      {/* Button to trigger value access */}
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
}