import React, { useState } from 'react';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import './App.css';

const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = show => {
    setSelectedShow(show);
  };

  return (
    <div className="app-container">
      <div className="app-header">
      <div className='flex'>  <h1  className="app-title"><a href="http://localhost:3000/">TV Show App</a></h1> <input  type="search" placeholder='Search here'/></div>
      </div>
      <div className="app-content">
        {selectedShow ? (
          <ShowDetails selectedShow={selectedShow} />
        ) : (
          <ShowList onSelectShow={handleSelectShow} />
        )}
      </div>

    </div>
  );
};

export default App;
