import React from 'react';
import TopSpot from './TopSpot';

const TopSpots = ({ spots }) => (
  <div data-testid="topspots" className="row">
    {spots.map((spot) => (
      <div key={spot.id} className="col-md-4 mb-4">
        <TopSpot
          name={spot.name}
          description={spot.description}
          location={spot.location}
        />
      </div>
    ))}
  </div>
);

export default TopSpots;