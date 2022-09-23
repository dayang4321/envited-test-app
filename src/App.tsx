import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'src/pages/Home';
import Event from 'src/pages/Event';
import GlobalStyles from 'src/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="event" element={<Event />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
