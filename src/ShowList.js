import React, { useState, useEffect } from 'react';
import './ShowList.css';

const ShowList = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="show-list-container">
      <h1 className="show-list-title">Show List</h1>
      <ul className="show-list">
        {shows.map(show => (
          <li key={show.show.id} className="show-list-item">
            <div className="show-list-item-content">
              <img
                src={show.show.image && show.show.image.medium}
                alt={show.show.name}
                className="show-list-item-image"
              />
              <h3 className="show-list-item-title">{show.show.name}</h3>
              <button
                onClick={() => onSelectShow(show)}
                className="show-list-item-button"
              >
                View Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;



