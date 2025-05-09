import React, { useState } from 'react';

const KeywordPanel: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock response — we'll wire API later
    setResults(`Showing data for: "${keyword}"`);
  };

  return (
    <div className="keyword-panel" style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <h2>Keyword Research</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <button type="submit">Analyze</button>
      </form>
      {results && <div style={{ marginTop: '1rem' }}>{results}</div>}
    </div>
  );
};

export default KeywordPanel;
