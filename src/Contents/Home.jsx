import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleEnrollNow = () => {
    navigate('/chatbot');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Enter into Student Info System</h1>
      <button style={styles.button} onClick={handleEnrollNow}>Enroll Now!</button>
    </div>
  );
};

export default Home;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom, #2196F3, #1976D2)',
      },
       heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#FFF',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#FFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

