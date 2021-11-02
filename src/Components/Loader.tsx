import React from 'react';

const Loader = () => (
  <div
    className="position-absolute"
    style={{ top: '50%', left: '50%', transform: 'translate(-50%)' }}
  >
    <div
      className="spinner-grow text-secondary"
      style={{ width: '3rem', height: '3rem' }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loader;
