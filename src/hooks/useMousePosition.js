import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ 
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20 
      });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
}