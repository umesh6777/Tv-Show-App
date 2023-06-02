import React, { useState, useEffect } from 'react';
import './ShowDetails.css';

const ShowDetails = ({ selectedShow, onBookTicket }) => {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    if (selectedShow) {
      fetch(`https://api.tvmaze.com/shows/${selectedShow.show.id}`)
        .then(response => response.json())
        .then(data => setSummary(data.summary))
        .catch(error => console.log(error));
    }
  }, [selectedShow]);

  if (!selectedShow) {
    return <div className="show-details-container">No show selected.</div>;
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      showName: selectedShow.show.name
    };
    localStorage.setItem('userDetails', JSON.stringify(user));
  };

  return (
    <div className="show-details-container">
      <div className="show-details-card">
        <h1 className="show-details-title">{selectedShow.show.name}</h1>
        <img
          src={selectedShow.show.image && selectedShow.show.image.medium}
          alt={selectedShow.show.name}
          className="show-details-image"
        />
        <p className="show-details-summary">{summary}</p>
        <form onSubmit={handleFormSubmit}>
          <div className="show-details-form-group">
            <label className="show-details-label">Name:</label>
            <input type="text" name="name" required className="show-details-input" />
          </div>
          <div className="show-details-form-group">
            <label className="show-details-label">Email:</label>
            <input type="email" name="email" required className="show-details-input" />
          </div>
          <div className="show-details-form-group">
            <label className="show-details-label">Phone:</label>
            <input type="text" name="phone" required className="show-details-input" />
          </div>
          <button type="submit" className="show-details-button">Book Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default ShowDetails;

