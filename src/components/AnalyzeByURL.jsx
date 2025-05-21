import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';

function AnalyzeByURL() {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleAnalyze = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (!url.trim()) return; // Optional: avoid blank URLs
    window.open(`/analyze?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <br /><br />
      <div className="search-container">
        <h3 className="search-heading">Analyze Flipkart Product by URL</h3>
        <form onSubmit={handleAnalyze}>
          <input
            type="text"
            placeholder="Paste Flipkart product URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="search-input"
            required
          />
          <button type="submit" className="search-button">
            Analyze Product
          </button>
        </form>
      </div>
      <br /><br /><br />
      <Footer />
    </>
  );
}

export default AnalyzeByURL;
