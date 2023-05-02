import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './features/greetings/Greeting';
import { Provider } from 'react-redux';
import store from './features/greetings/greetingStore';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greeting/>} />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
