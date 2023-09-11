import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Exit.css'; 
import { useNavigate } from 'react-router-dom';


const Exit = () => {

  const {name, age} = useSelector(state => state.user)
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="exit-container">
      <div>
        <h1>Your name {name} age {age} has been added to the student system.</h1>
        
        <button className="exit-button" onClick={handleExit}>You may now Exit</button>
      </div>
    </div>
  );
};

export default Exit;
