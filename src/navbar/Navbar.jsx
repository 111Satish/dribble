import React, { useState } from "react";
import "./Navbar.css";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-v2" data-site-nav-v2>
      {isMobileMenuOpen && (
        <div
          className="nav-v2__dark-overlay open"
          onClick={toggleMobileMenu}
        ></div>
      )}

      <div className="nav-v2__wrapper">
        <button
          className="nav-v2-burger"
          data-nav-v2-burger
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
        >
          <FiAlignJustify />
        </button>
        <a
          className="nav-v2-logo"
          data-nav-event-clicked="Logo"
          aria-label="Back to home page"
        >
          <img src={"./logo.png"} alt="Logo" />
        </a>

        <nav
          className={`nav-v2-main ${isMobileMenuOpen ? "open" : ""}`}
          role="navigation"
          data-nav-v2-mobile
        >
          <div className="nav-v2-main__wrapper">
            <ul className="nav-v2-main__list">
              <li className="nav-v2-main__item nav-v2-main__item--sub-nav">
                <a data-nav-event-clicked="Hire Designers" >
                  Find designers
                </a>
                <ul className="nav-v2-sub">
                  <li className="nav-v2-sub__item">
                    <a
                      className="nav-v2-sub__link"
                      data-nav-event-clicked="Designer Search"
                    >
                      Designer search
                      <span className="nav-v2-sub__subtitle">
                        Quickly find your next designer
                      </span>
                    </a>
                  </li>
                  <li className="nav-v2-sub__item">
                    <a
                      className="nav-v2-sub__link"
                      data-nav-event-clicked="Post a Job"
                    >
                      Post a job
                      <span className="nav-v2-sub__subtitle">
                        The #1 job board for design talent
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-v2-main__item">
                <a data-nav-event-clicked="Inspiration" >
                  Inspiration
                </a>
              </li>
              <li className="nav-v2-main__item nav-v2-main__item--sub-nav">
                <a data-nav-event-clicked="Learn Design" >
                  Courses
                </a>
                <ul className="nav-v2-sub">
                  <li className="nav-v2-sub__item">
                    <a
                      className="nav-v2-sub__link"
                      data-nav-event-clicked="UX Diploma"
                    >
                      UX Diploma
                      <span className="nav-v2-sub__subtitle">
                        Learn UX design from scratch in 6 months
                      </span>
                    </a>
                  </li>
                  <li className="nav-v2-sub__item">
                    <a
                      className="nav-v2-sub__link"
                      data-nav-event-clicked="UI Certificate"
                    >
                      UI Certificate
                      <span className="nav-v2-sub__subtitle">
                        12-week UI skill building for designers
                      </span>
                    </a>
                  </li>
                  <li className="nav-v2-sub__divider"></li>
                  <li className="nav-v2-sub__item">
                    <a
                      className="nav-v2-sub__link"
                      data-nav-event-clicked="Workshops"
                    >
                      Live interactive workshops
                      <span className="nav-v2-sub__subtitle">
                        with design professionals
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-v2-main__item">
                <a data-nav-event-clicked="Jobs" >
                  Jobs
                </a>
              </li>
              <li className="nav-v2-main__item">
                <a data-nav-event-clicked="Go Pro">
                  Go Pro
                </a>
              </li>
              <li className="nav-v2-main__item nav-v2-main__item--divided nav-v2-hide-medium-up">
                <a data-nav-event-clicked="Sign in" >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav-v2-dynamic" data-nav-v2-dynamic>
          <div className="nav-v2-dynamic__logged-out">
            <form
              className="nav-v2-search"
              data-nav-v2-search-form
              action="/search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                role="img"
                className="icon nav-v2-search__icon"
              >
                <path
                  d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12.814 12.8132L15.5 15.4999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <input
                type="text"
                className="nav-v2-search__input"
                placeholder="Search"
                name="q"
                aria-label="Search"
              />
            </form>

            <div className="nav-v2-dynamic__actions">
              <a className="nav-v2-dynamic__link" >
                Sign up
              </a>
              <a className="nav-v2-dynamic__link" >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
