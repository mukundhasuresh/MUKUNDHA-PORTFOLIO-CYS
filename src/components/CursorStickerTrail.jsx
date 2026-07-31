import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Use the user's new uploaded stickers
const stickerImages = [
  '/images/antigravity/final_sticker1.png',
  '/images/antigravity/final_sticker2.png',
  '/images/antigravity/final_sticker3.png',
  '/images/antigravity/final_sticker4.png',
  '/images/antigravity/final_sticker5.png'
];

const CursorStickerTrail = ({ children }) => {
  const [stickers, setStickers] = useState([]);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    // Drop a sticker every 120px of movement for a much wider gap
    const dist = Math.hypot(e.clientX - lastPos.x, e.clientY - lastPos.y);
    if (dist > 120) { 
      setLastPos({ x: e.clientX, y: e.clientY });
      
      const newSticker = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        src: stickerImages[Math.floor(Math.random() * stickerImages.length)],
        rotation: (Math.random() - 0.5) * 60, // Random rotation
        scale: 0.8 + Math.random() * 0.4 // Random scale 0.8x to 1.2x
      };

      setStickers((prev) => [...prev, newSticker]);

      // Remove the sticker after 1.5 seconds
      setTimeout(() => {
        setStickers((prev) => prev.filter(s => s.id !== newSticker.id));
      }, 1500);
    }
  }, [lastPos]);

  return (
    <div 
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}
    >
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>

      {/* Render the sticker trail */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
        <AnimatePresence>
          {stickers.map((sticker) => (
            <motion.div
              key={sticker.id}
              initial={{ opacity: 0, scale: 0.2, x: sticker.x - 75, y: sticker.y - 75, rotate: sticker.rotation }}
              animate={{ opacity: 1, scale: sticker.scale }}
              exit={{ opacity: 0, scale: sticker.scale * 1.2, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                width: '150px',
                height: '150px',
                zIndex: 5
              }}
            >
              <img 
                src={sticker.src} 
                alt="Cyber Sticker" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CursorStickerTrail;
