import React, { useEffect, useRef } from 'react';

export default function Landing() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(err => console.log('Autoplay prevented:', err));
    }
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to College Events Portal</h1>
      <p className="lead">Discover events, request to host, and manage campus activities.</p>
      <div className="ratio ratio-16x9">
        <video 
          ref={videoRef}
          src="https://drive.google.com/uc?export=download&id=1RdbpW_UPJFFpQNA-FTCMRk2Zw8zbiKsl" 
          autoPlay 
          loop 
          muted 
          controls
          style={{ width: '100%', height: '100%' }}
        ></video>
      </div>
    </div>
  );
}
