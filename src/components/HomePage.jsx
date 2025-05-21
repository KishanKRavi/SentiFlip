import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/navbar.css';
import '../stylesheets/homePage.css';
import '../stylesheets/footer.css';
import Navbar from "./NavBar";
import Footer from "./Footer";

const HomePage = () => {
  
  return (
    <div className="homepage">
      {/* Navbar */}
      <Navbar></Navbar>

      <div className="homepage-container">
        {/* Header */}
        <br /><br /><br />
        <div className="homepage-header">
          <h1 className="homepage-title">SentiFlip</h1>
          <p className="homepage-subtitle">Sentiment Analyzer of Flipkart Products <br /> Understand product emotions before you buy</p>
        </div>

        <a className="linkBtn" href="/search">Try Now</a>

        {/* Description */}
        <div className="homepage-description">
          <p>
            Search any product from Flipkart and analyze what people feel about it.
            This tool uses real-time web scraping and AI-powered Natural Language Processing (NLP)
            to generate accurate sentiment analysis of product reviews.
          </p>
        </div>

        
        {/* Features */}
        <hr />
        <h2 className="features-title">Features</h2>
        <div className="feature-section">
          <div className="feature-card">
            <h5>🔍 Live Flipkart Search</h5>
            <p>Fetch products in real-time based on your query.</p>
          </div>
          <div className="feature-card">
            <h5>📝 Multi-Page Review Scraping</h5>
            <p>Collect reviews across multiple pages automatically.</p>
          </div>
          <div className="feature-card">
            <h5>🧠 Gemini AI Insights</h5>
            <p>Summarizes product reviews with key pros, cons, and smart insights.</p>
          </div>
          <div className="feature-card">
            <h5>🤖 Sentiment Analysis</h5>
            <p>Analyze tone of reviews: Positive, Negative, Neutral.</p>
          </div>
          <div className="feature-card">
            <h5>📊 Score Report</h5>
            <p>Visual feedback with sentiment percentages and ratings.</p>
          </div>
        </div>

        {/* Footer */}
        <Footer/>
      </div>

    </div>
  );
};

export default HomePage;
