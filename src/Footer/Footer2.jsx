import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; 
import "./Footer2.css";

const Footer2 = () => {
  return (
    <Router>
      <footer className="footer-v2">
        <Link className="footer-v2__logo" to="/"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="30" viewBox="0 0 210 59" fill="none">
            <title>Dribbble: the community for graphic design</title>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
          </svg>
          <span className="accessibility-text">Back to home page</span>
        </Link>
        <ul className="footer-v2__links">
          <li><Link className="footer-v2__link" to="/for-designers">For designers</Link></li>
          <li><Link className="footer-v2__link" to="/hiring">Hire talent</Link></li>
          <li><Link className="footer-v2__link" to="/shots/popular">Inspiration</Link></li>
          <li><Link className="footer-v2__link" to="/advertise">Advertising</Link></li>
          <li><Link className="footer-v2__link" to="/stories">Blog</Link></li>
          <li><Link className="footer-v2__link" to="/about">About</Link></li>
          <li><Link className="footer-v2__link" to="/careers">Careers</Link></li>
          <li><Link className="footer-v2__link" to="/contact">Support</Link></li>
        </ul>
        <div className="footer-v2__social-links">
        
          <Link to="http://twitter.com/dribbble" className="footer-v2__social-link">
            <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="aezd2phhkjrqw3zsfw22ncu55ilq89f"
              role="img" viewBox="0 0 24 24" className="icon ">
              <title id="aezd2phhkjrqw3zsfw22ncu55ilq89f">Twitter icon</title>
              <path></path>
            </svg>
            <span className="accessibility-text">Twitter</span>
          </Link>
          
        </div>
      </footer>
    </Router>
  );
};

export default Footer2;
