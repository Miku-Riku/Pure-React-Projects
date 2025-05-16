import React from 'react';

import Chat from './components/chat/Chat';
import Join from './components/join/Join';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat  />} />
      </Routes>
    </Router>
  );
}

export default App;
