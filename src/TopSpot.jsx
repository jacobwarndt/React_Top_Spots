import React from 'react';

const TopSpot = ({ name, description, location }) => {
  const [lat, long] = location;
  const googleMapsLink = `https://maps.google.com/?q=${lat},${long}`;

  return (
    <div data-testid="topspot" className="card h-100 shadow-sm">
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default TopSpot;