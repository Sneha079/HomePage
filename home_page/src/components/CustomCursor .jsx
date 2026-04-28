import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
      }}
    >
      <div className="w-7 h-7 rounded-full border border-blue-900 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default CustomCursor;