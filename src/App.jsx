import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopSpots from './TopSpots';

const App = () => {
  const [topspots, setTopspots] = useState([]);

  useEffect(() => {
    axios
      .get('https://ccc.helloworldbox.com/items/top_spots')
      .then(res => setTopspots(res.data.data));
  }, []);

  return (
    <div className="container mt-5">
      <h1>San Diego Top Spots</h1>
      <p>A list of the top 30 places to see in San Diego, California.</p>
      <TopSpots spots={topspots} />
    </div>
  );
};

export default App;