import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'src/pages/Home';
import GlobalStyles from 'src/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
