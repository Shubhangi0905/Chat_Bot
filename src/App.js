import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Contents/Home";
import ChatBot from "./Contents/ChatBot"
import Exit from "./Contents/Exit";
import { Provider } from 'react-redux';
import store from './context/stores';

export default function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/exit" element={<Exit />} />
        </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}
