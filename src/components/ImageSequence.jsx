import React, { useEffect, useRef, useState } from 'react';

const ImageSequence = ({ frameCount = 180 }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Pad with zeros: frame_001.webp
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/images/antigravity/frame_${paddedIndex}.webp`;
      
      img.onload = () => {
        loadCount++;
        setLoaded(loadCount);
      };
      
      img.onerror = () => {
        // Fallback or just ignore if image is missing so it doesn't break
        loadCount++;
        setLoaded(loadCount);
      };
      
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount]);

  // Handle Scroll and Draw
  useEffect(() => {
    if (loaded < frameCount || images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    
    // Initial draw
    if (images[0].complete && images[0].naturalWidth > 0) {
      canvas.width = images[0].width || 1920;
      canvas.height = images[0].height || 1080;
      context.drawImage(images[0], 0, 0);
    }

    const handleScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      
      if (maxScrollTop <= 0) return;

      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      const img = images[frameIndex];
      if (img && img.complete && img.naturalWidth > 0) {
        requestAnimationFrame(() => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loaded, images, frameCount]);

  return (
    <div className="image-sequence-container">
      <canvas ref={canvasRef} />
      {loaded < frameCount && (
        <div style={{ position: 'absolute', opacity: 0.5 }}>
          Loading 3D Engine ({Math.round((loaded / frameCount) * 100)}%)
          <br/>
          <small>Drop your frames into /public/images/antigravity/</small>
        </div>
      )}
    </div>
  );
};

export default ImageSequence;
