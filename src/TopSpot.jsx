import React from 'react';

const TopSpot = ({ name, description, location }) => {
  const [lat, long] = location;
  const googleMapsLink = `https://www.google.com/maps?q=${lat},${long}`;

  return (
    <div data-testid="topspot" className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default TopSpot;