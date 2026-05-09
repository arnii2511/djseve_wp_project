import React from 'react';

export default function Landing() {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to College Events Portal</h1>
      <p className="lead">Discover events, request to host, and manage campus activities.</p>
      <div className="ratio ratio-16x9">
        <video src="https://drive.google.com/uc?export=download&id=YOUR_VIDEO_ID_HERE" autoPlay loop muted controls></video>
      </div>
    </div>
  );
}
