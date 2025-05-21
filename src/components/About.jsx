import { useState } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import '../stylesheets/navbar.css';
import '../stylesheets/footer.css';
import '../stylesheets/about.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('project');

  return (
    <>
      <Navbar />
<br /><br /> <br /><br /><br />
      <div className="tab-buttons">
        
        <button
          className={activeTab === 'project' ? 'tab active-tab' : 'tab'}
          onClick={() => setActiveTab('project')}
        >
          About Project
        </button>
        <button
          className={activeTab === 'developers' ? 'tab active-tab' : 'tab'}
          onClick={() => setActiveTab('developers')}
        >
          About Developers
        </button>
      </div>

      <div className="about-container">
        {activeTab === 'project' && (
          <>
                <h1 className="about-title">About SentiFlip</h1>

                <p className="about-intro">
                Welcome to the project on Sentiment Analysis on Flipkart Products — an intelligent tool designed to analyze and summarize customer sentiments from product reviews, helping users make informed decisions before purchasing.
                </p>

                <h2 className="section-title">What is Sentiment Analysis?</h2>
                <p className="section-text">
                Sentiment analysis is the process of determining the emotional tone behind a series of words to gain an understanding of the attitudes, opinions, and emotions expressed within an online mention. This project uses advanced Natural Language Processing (NLP) techniques to evaluate reviews and classify them as positive, negative, or neutral.
                </p>

                <h2 className="section-title">How is Sentiment Analyzed?</h2>
                <p className="section-text">
                This project uses Natural Language Processing (NLP) with VADER (Valence Aware Dictionary and sEntiment Reasoner) to analyze the emotional tone of customer reviews. Each review is given a compound sentiment score ranging from -1 (most negative) to +1 (most positive). Based on these scores:
                <br/><br/>
                <ul className='technologies-list'>
                  <li><strong>Reviews with a score ≥ 0.5</strong> are classified as <strong>Positive</strong>, ≤ -0.5 as <strong>Negative</strong>, and in between as <strong>Neutral</strong>.</li>
                  <li><strong>Sentiment percentages</strong> are calculated by dividing the number of reviews in each category by the total number of reviews.</li>
                  <li>An <strong>Overall Score</strong> is computed by converting the average compound score using the formula: <code>((compound + 1) * 50)</code>, resulting in a value between 0 and 100.</li>
                  <li>This score is then categorized into sentiment labels like <strong>Very Positive</strong>, <strong>Positive</strong>, <strong>Neutral</strong>, etc.</li>
                 <li><strong>Final Verdict:</strong> Based on the overall score and percentage of positive reviews—if the score is &gt; 75 and positive reviews are &gt; 60%, it returns <em>"Highly Recommended ✅"</em>; if &gt; 60, then <em>"Recommended 👍"</em>; if &gt; 45, <em>"Consider Alternatives ⚠️"</em>; otherwise, <em>"Not Recommended ❌"</em>.</li>

                  <li><strong>Top 3 Positive</strong> and <strong>Top 3 Negative</strong> reviews are identified based on their sentiment scores.</li>
                  <li><strong>Pros and Cons Keywords</strong> are extracted from positive and negative reviews using frequency analysis, excluding common stopwords.</li>
                </ul>
                </p>
                

            <h2 className="section-title">Key Features</h2>
                <ul className="features-list">
                <li>🔍 <strong>Live Flipkart Search:</strong> Fetch products in real-time based on your query.</li>
                <li>📝 <strong>Multi-Page Review Scraping:</strong> Collect reviews across multiple pages automatically.</li>
                <li>🧠 <strong>Gemini AI Insights:</strong> Summarizes product reviews with key pros, cons, and smart insights.</li>
                <li>🤖 <strong>Sentiment Analysis:</strong> Analyze tone of reviews: Positive, Negative, Neutral.</li>
                <li>📊 <strong>Score Report:</strong> Visual feedback with sentiment percentages and ratings.</li>
                </ul>


                <h2 className="section-title">Technologies Used</h2>
                <ul className="technologies-list">
                <li><strong>Python:</strong> Used as the core backend language for implementing logic and AI-powered processing.</li>
                <li><strong>Backend:</strong> Django, back-end server side web frameworks used to handle routes, API calls, and backend services.</li>
                <li><strong>VADER:</strong> NLP libraries that analyze sentiment in textual reviews.</li>
                <li><strong>Web Scraping:</strong> Selenium-based scripts to extract reviews dynamically from Flipkart.</li>
                <li><strong>Gemini API:</strong> Google's AI used to summarize about the product.</li>
                <li><strong>React:</strong> Frontend library used to build a dynamic and responsive UI.</li>
                <li><strong>Render.com:</strong> Hosting platform used to deploy both frontend and backend services online.</li>
                </ul>

                <h2 className="section-title">Why This Project?</h2>
                <p className="section-text">
                In the age of e-commerce and social media, customer opinions drive purchasing decisions more than ever. This project aims to simplify how users understand vast amounts of review data by providing quick, accurate sentiment analysis and summarization. Whether you’re a shopper, seller, or researcher, this tool offers valuable insights to guide your decisions.
                </p>
          </>
        )}

        {activeTab === 'developers' && (

          <>
          <h2 className="about-title">Meet The Developers</h2>
            <div className="developers-container">
                {/* Developer 1 */}
                <div className="developer-card">
                <img
                  src="../../public/kishan.png"
                  alt="Bob Smith"
                  className="developer-image"
                />
                <h3 className="section-title">Kishan K R</h3>
                <p className="section-text developer-role">Full stack Web Developer</p>
                <p className="section-text">
                  <strong>Role : </strong> I handled the full-stack development of the project, building both the frontend and backend using Python, Django, and ReactJS.
                </p>
                <p className="section-text">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:kishankr0204@gmail.com" className="developer-link">
                    kishankr0204@gmail.com
                    </a>
                </p>
                <p className="section-text">
                    <strong>LinkedIn:</strong>{' '}
                    <a
                    href="https://linkedin.com/in/kishan-k-r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="developer-link"
                    >
                    linkedin.com/in/kishan-k-r
                    </a>
                </p>
                </div>

                {/* Developer 2 */}
                <div className="developer-card">
                <div className="devImg">
                  <img
                    src="../../public/lucky.jpg"
                    alt="Bob Smith"
                    className="developer-image"
                />
                </div>
                <h3 className="section-title">Lakshmana D</h3>
                <p className="section-text developer-role">FrontEnd Developer</p>
                <p className="section-text">
                   <strong>Role : </strong> I was responsible for designing and developing the frontend using React.js and CSS, ensuring a clean and responsive user interface.
                </p>

                  <p className="section-text">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:lakshmanad503@gmail.com" className="developer-link">
                      lakshmanad503@gmail.com
                      </a>
                  </p>

                <p className="section-text">
                    <strong>LinkedIn:</strong>{' '}
                    <a
                    href="https://linkedin.com/in/lakshmana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="developer-link"
                    >
                    linkedin.com/in/lakshmana
                    </a>
                </p>
                </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
