import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './NavBar';
import Footer from './Footer';
import '../stylesheets/navbar.css';
import '../stylesheets/homePage.css';
import '../stylesheets/footer.css';
import '../stylesheets/analyzeproducts.css';
import '../stylesheets/loadSpinner.css'
import SentimentGauge from './sentimentSpeedometer';
import ReviewWordCloud from './ReviewWordCloud';
function shouldDisplayReviewText(rating, heading, text) {
  if (!rating || !heading || !text) return true;
  const combined = rating + heading;
  return combined !== text;
}
function AnalyzeProduct() {
  const [analysis, setAnalysis] = useState(null);
  const [geminiAnalysis, setGeminiAnalysis] = useState(null);
  const [ loading, setLoading] = useState(true);
  const location = useLocation();
  // Extract product details from query parameters
  const searchParams = new URLSearchParams(location.search);
  const productUrl = searchParams.get('url');
  const productTitle = searchParams.get('title')||searchParams.get('url');
  const productPrice = searchParams.get('price')||'';
  const productImage = searchParams.get('image')||'';
  useEffect(() => {
    async function fetchAnalysis() {
      try {
        setLoading(true);
        console.log("Fetching analysis for:", productUrl, productTitle);
        const response = await axios.get(`http://127.0.0.1:8000/analyze/?url=${encodeURIComponent(productUrl)}`);
        const geminiResponse = await axios.get(`http://127.0.0.1:8000/gemini/?title=${encodeURIComponent(productTitle)}`);
        setAnalysis(response.data);
        setLoading(false);
        setGeminiAnalysis(geminiResponse.data.details_of_product);
      } catch (err) {
        console.error("Error analyzing product:", err);
      }
    }
    fetchAnalysis();
  }, [productUrl, productTitle]);
  if (loading) {
    return (
      <>
      <Navbar></Navbar>
        {productPrice &&
        <section className="product-info">
          <h3 className="section-title"></h3>
          <p className="product-name"><strong>{productTitle}</strong></p>
          <div className="img-container">
             <img src={productImage} alt={productTitle} className="product-image" />
          </div>
          <p className="product-price">Price: {productPrice}</p>
          <a className="analyze-button"  href={productUrl}>View on Flipkart</a>
        </section>
        }
      <>
        <div class="loadingSpinner">
          <div class="spinner">
              <img className="logoimg" src="/sentiflip_logo.png" alt="Sentiflip Logo" />
          </div>
          <div class="loadingText">Loading... Please wait</div>
        </div>    
      </><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer></Footer>
      </>
    )
  }
  return (
    <>
      <Navbar />
      <div className="analysis-container">
        <h2 className="main-title">📊 Sentiment Analysis of product</h2>
        {/* Product Info */}
        {productPrice &&
        <section className="product-info">
          <h3 className="section-title"></h3>
          <p className="product-name"><strong>{productTitle}</strong></p>
          <div className="img-container">
             <img src={productImage} alt={productTitle} className="product-image" />
          </div>
          <p className="product-price">Price: {productPrice}</p>
          <a className="analyze-button"  href={productUrl}>View on Flipkart</a>
        </section>
        }
        {/* Sentiment Stats */}
         <section className='sentiment speedometer'>
          <SentimentGauge score={analysis.overall_score}/>
        </section>
        <section className='wordcloud'>
          <ReviewWordCloud reviews={analysis.reviews} />
        </section>
        <section className="gemini-analysis">
          <h3 className="section-title">Details of analysis</h3>
          <br />
          <div className="sentiment-stats feature-list">
            <b><p className="positive-stat feature-item">✅ Positive: {analysis.positive_percent}%</p></b>
            <b><p className="negative-stat feature-item">❌ Negative: {analysis.negative_percent}%</p></b>
            <b><p className="neutral-stat feature-item">🤔 Neutral: {analysis.neutral_percent}%</p></b>
            <b><p className="overall-score feature-item">📈 Overall Score: {analysis.overall_score} / 100</p></b>
            <b><p className="sentiment-label feature-item">🧠 Sentiment: <strong>{analysis.sentiment_label}</strong></p></b>
            <b><p className="final-verdict feature-item">🧾 Verdict: <strong>{analysis.final_verdict}</strong></p></b>
          </div>
          <div className="keywords-section">
            <h4 className="subsection-title">Common Positive keywords:</h4>
            <ul className="pros-list">
              {analysis.pros_keywords.length > 0 ? (
                analysis.pros_keywords.map((keyword, i) => (
                  <li key={i} className="pros-item">{keyword}</li>
                ))
              ) : (
                <li>No positive comments identified</li>
              )}
            </ul>
            <h4 className="subsection-title">Common Negative keywords:</h4>
            <ul className="cons-list">
              {analysis.cons_keywords.length > 0 ? (
                analysis.cons_keywords.map((keyword, i) => (
                  <li key={i} className="cons-item">{keyword}</li>
                ))
              ) : (
                <li>No negative comments identified</li>
              )}
            </ul>
          </div>
          <h3 className="subsection-title">📝 Top Reviews:</h3>
          <div className="top-reviews">
            <h4>Top Positive Reviews:</h4>
            <ul >
              {analysis.top_positive_reviews.length > 0 ? (
                analysis.top_positive_reviews.map((review, i) => (
                  <li className="review-item posiRev" key={i}>{review}</li>
                ))
              ) : (
                <li>No positive reviews available</li>
              )}
            </ul>
            <h4>Top Negative Reviews:</h4>
            <ul >
              {analysis.top_negative_reviews.length > 0 ? (
                analysis.top_negative_reviews.map((review, i) => (
                  
                  <li className="review-item negaRev" key={i}>{review}</li>
                ))
              ) : (
                <li>No negative reviews available</li>
              )}
            </ul>
          </div>
        </section>
        {/* Gemini AI Output */}
        <section className="gemini-analysis">
          <h3 className="section-title">🤖 Gemini AI Insights</h3>
          <h2 className="product-heading">📦 {geminiAnalysis.product_name}</h2>
          <h3 className="subsection-title">🔍 Key Features:</h3>
          <ul className="feature-list">
            {geminiAnalysis.features?.map((feature, index) => (
              <li key={index} className="feature-item">{feature}</li>
            ))}
          </ul>
          <h3 className="subsection-title">👍 Pros:</h3>
          <ul className="pros-list">
            {geminiAnalysis.pros?.map((pro, index) => (
              <li key={index} className="pros-item">{pro}</li>
            ))}
          </ul>
          <h3 className="subsection-title">👎 Cons:</h3>
          <ul className="cons-list">
            {geminiAnalysis.cons?.map((con, index) => (
              <li key={index} className="cons-item">{con}</li>
            ))}
          </ul>
          <h3 className="subsection-title">🧾 Summary:</h3>
          <p className="summary-text">{geminiAnalysis.summary}</p>
        </section>
        {/* Reviews */}
        <section className="review-section">
          <h3 className="section-title">📝 Reviews:</h3>
          <br />
          <ul className="review-list">
            {analysis.reviews.map((review, index) => (
              <li key={index} className="review-item">
                <small className="review-meta">
                  {Array.from({ length: review.Rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; <b> By {review.User_Name}</b>
                </small>
                <br /> <br />
                <small className="review-heading">{review.Review_Heading}</small><br />
                {shouldDisplayReviewText(review.Rating, review.Review_Heading, review.Review_Text) && (
                  <p className="review-text">{review.Review_Text}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default AnalyzeProduct;
