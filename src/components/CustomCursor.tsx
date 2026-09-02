import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered elements for cursor text attributes
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]');
      
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full border border-dwild-sand transition-all duration-300 ${
          isHovered
            ? 'w-16 h-16 bg-dwild-sand text-dwild-black shadow-2xl scale-100'
            : 'w-4 h-4 bg-dwild-sand/40 backdrop-blur-sm border-dwild-sand/60'
        }`}
      >
        {isHovered && cursorText && (
          <span className="text-[10px] tracking-[0.2em] font-bold uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
