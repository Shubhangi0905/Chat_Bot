import React from 'react';
import Chat from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../context/slice';

const Chatbot = () => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch()

  const handleEnd = ({ steps }) => {
    const { Age, Name } = steps;
    dispatch(setUser({name: Name.value, age: Age.value}))
    setTimeout(() => {
       
    setRedirect(true);
    },5000)
  };

  const ageOptions = [];
  for (let i = 18; i <= 40; i++) {
    ageOptions.push({ value: i, label: i.toString(), trigger: 'ThankYou' });
  }

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to the student info system!',
      delay: 3000,
      trigger: 'GotIt',
    },
    {
      id: 'GotIt',
      options: [
        {
          value: 'Got it',
          label: 'Got it',
          trigger: 'AskName',
        },
      ],
    },
    {
      id: 'AskName',
      message: 'Enter your Name',
      trigger: 'Name',
    },
    {
      id: 'Name',
      user: true,
      trigger: 'AskAge',
    },
    {
      id: 'AskAge',
      message: 'Enter Age',
      trigger: 'Age',
    },
    {
      id: 'Age',
      options: ageOptions,
    },
    {
      id: 'ThankYou',
      message: 'Thank you. In 5 seconds, the chat will be closed.',
      end: true,
    },
  ];

    

  return redirect ? <Navigate to='/exit' /> : (
    <Segment style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(to bottom, #f0f0f0, #e1e1e1)' }}>
      <Chat steps={steps} handleEnd={handleEnd} />
    </Segment>
  );
};

export default Chatbot;
