// apps/admin-dashboard/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KeywordPanel from './components/KeywordPanel';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <h1>Admin Dashboard</h1>
        <Routes>
          <Route path="/" element={<KeywordPanel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
