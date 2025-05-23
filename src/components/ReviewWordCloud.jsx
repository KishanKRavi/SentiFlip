import React, { useEffect, useRef, useState } from 'react';
import WordCloud from 'wordcloud';
const ReviewWordCloud = ({ reviews }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = Math.min(400, width * 0.66); // Maintain aspect ratio
        setDimensions({ width, height });
      }};
    resize(); // Initial call
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  useEffect(() => {
    if (!reviews || reviews.length === 0) return;
    const allText = reviews.map(review => review.Review_Text).join(' ');
    const wordCounts = {};
    allText
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .forEach(word => {
        if (word.length > 3) {
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
      });
    const wordList = Object.entries(wordCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 100);
    WordCloud(canvasRef.current, {
      list: wordList,
      gridSize: Math.round(16 * dimensions.width / 1024),
      weightFactor: dimensions.width / 40,
      fontFamily: 'cursive',
      color: 'random-dark',
      backgroundColor: '#0062ff15',
      rotateRatio: 0.5,
    });
  }, [reviews, dimensions]);
  return (
    <div ref={containerRef} style={{ width: '100%', textAlign: 'center' }}>
      <canvas
        className='wordCloudCanvas'
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        style={{ width: '100%', height: 'auto' }}
      ></canvas>
    </div>
  );
};
export default ReviewWordCloud;
