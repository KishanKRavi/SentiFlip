import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import Footer from './Footer';
import '../stylesheets/navbar.css';
import '../stylesheets/homePage.css';
import '../stylesheets/footer.css';
import '../stylesheets/searchPage.css';
import '../stylesheets/loadSpinner.css'

function SearchProduct() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
  e.preventDefault(); // Prevent form refresh

  try {
    setLoading(true);
    console.log("searching in progress ... please wait ...");
    const response = await axios.get(`https://sentiflip-backend.onrender.com/search/?query=${query}`);
    setLoading(false);
    console.log("searching completed ... please wait ...");
    setProducts(response.data.products);
  } catch (error) {
    setLoading(false);
    console.error("Error searching products", error);
  }
};


  const openAnalyzePage = (product) => {
    // Log the product to check its details
    console.log(product);
  
    if (!product.Link) {
      console.error("Product Link is missing");
      return;
    }
  
    // Create a URLSearchParams object for query string construction
    const productDetails = new URLSearchParams({
      title: product.Title || 'N/A',
      price: product.Price || 'N/A',
      image: product.Image || 'N/A',
    }).toString();
  
    // Open the analyze page in a new window with the product details
    window.open(`/analyze?url=${encodeURIComponent(product.Link)}&${productDetails}`, '_blank');
  };
  
  return (
    <div>
      <Navbar />
      <br /><br />
      <div className="search-container">
      <h2 className="search-heading">Search Products</h2>
      <form onSubmit={(e) => handleSearch(e)}>
        <input 
          required
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: mobiles, laptops, watches, etc."
          className="search-input"
        /> 
        <br />
        <button type="submit" className="search-button">Search</button>
      </form>

    </div>

    {loading && (
      <>
        <div class="loadingSpinner">
          <div class="spinner">
            
              <img className='logoimg' src="../../public/sentiflip_logo.png" alt="" />
            
          </div>
          <div class="loadingText">Loading... Please wait</div>
        </div>  
      </>
    )}
      <h2 className='searchQuery'>{query.toUpperCase()}</h2>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <div className="product-card">
              <img src={product.Image} alt={product.Title} className="product-image" />
              <div className="product-info">
                <h2 className="product-title">{product.Title}</h2>
                <p className="product-price">Price: {product.Price}</p>
                <div className="btn-container">
                  <a href={product.Link} target="_blank" rel="noopener noreferrer" className="analyze-button product-link">
                    View on Flipkart
                  </a>
                  <br />
                  <button onClick={() => openAnalyzePage(product)} className="analyze-button">
                    Analyze Reviews
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    
      <div className="footer-space">
        <small>*note: The data  is being scraped from Flipkart</small>
      </div>
      <Footer />
    </div>
  );
}

export default SearchProduct;
