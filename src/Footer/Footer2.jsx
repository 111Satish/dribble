import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; 
import "./Footer2.css";
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram} from "react-icons/fa";

const Footer2 = () => {
  return (
    <Router>
      <footer className="footer-v2">
        <Link className="footer-v2__logo" to="/"> 
          <img src ={'./logo.png'}/>
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
        
          <Link to="http://youtube.com" className="footer-v2__social-link">
              <FaYoutube/>
            <span className="accessibility-text">Youtube</span>
          </Link>
          <Link to="http://facebook.com" className="footer-v2__social-link">
              <FaFacebook/>
            <span className="accessibility-text">Facebook</span>
          </Link>
          <Link to="http://instagram.com" className="footer-v2__social-link">
              <FaInstagram/>
            <span className="accessibility-text">Instagram</span>
          </Link>
          <Link to="http://twitter.com" className="footer-v2__social-link">
              <FaTwitter/>
            <span className="accessibility-text">Twitter</span>
          </Link>
          
        </div>
      </footer>
    </Router>
  );
};

export default Footer2;
