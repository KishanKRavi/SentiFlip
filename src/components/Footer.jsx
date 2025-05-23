import React from 'react';
export default function Footer(){
  return (
    <>
     <br /><br />
        <div className='footerOBJ'>
          <footer className="footer-container">
            <div className="footer-content">
              <div className="logo">
              <img src="/sentiflip_logo.png" alt="" className='logoImg' />
              <div className="">SentiFlip</div>
            </div>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/in/kishan-k-r"className="social-icon">LinkedIn</a>
                <a href="https://github.com/KishanKRavi"  className="social-icon">GitHub</a>
              </div>
            </div>
            <div className="foottterr">
            <p>Your trusted Flipkart product sentiment analyzer.</p>
            </div>
            <div className="footer-bottom"><hr />
              <p>© 2025 Made with ❤️ by Kishan KR & Lakshmana D — Final Year BCA Project</p>
            </div>
        </footer>
        </div>
        </>
      );
}
