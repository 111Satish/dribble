import React, { useState } from "react";
import "./Menu.css";
import { FaFilter } from "react-icons/fa";
import TagColor from "../search/TagColor/TagColor";

const Menu = () => {
  const [showTagColor, setShowTagColor] = useState(false);

  const toggleTagColor = () => {
    setShowTagColor((prevShowTagColor) => !prevShowTagColor);
  };

  return (
    <div>
      <div className="menu-bar">
        <div className="menu-left">
          <select className="dropdown">
            <option value="popular">Popular</option>
            <option value="new">New & Noteworthy</option>
          </select>
        </div>
        <div className="menu-middle">
          <div className="scroll-container">
            <span>Discover</span>
            <span>Animation</span>
            <span>Branding</span>
            <span>Illustration</span>
            <span>Mobile</span>
            <span>Print</span>
            <span>Product</span>
            <span>Product</span>
            <span>Product</span>
            <span>Product</span>
            <span>Product</span>
          </div>
        </div>
        <div className="menu-right">
          <button className="filter-button" onClick={toggleTagColor}>
            <FaFilter />
            <span>Filter</span>
          </button>
        </div>
      </div>
      {showTagColor && (
        <div>
          <TagColor />
        </div>
      )}
    </div>
  );
};

export default Menu;
