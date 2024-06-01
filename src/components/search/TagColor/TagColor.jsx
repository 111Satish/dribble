// src/SearchBar.js
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './TagColor.css';

const TagColor = () => {
  const [color, setColor] = useState('');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleColorClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
    setDisplayColorPicker(false);
  };

  return (
    <div className="search-bar">
      <div className="search-box">
        <input type="text" placeholder="Search tags..." className="input-box" />
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search colors..."
          className="input-box"
          value={color}
          onClick={handleColorClick}
          readOnly
        />
        {displayColorPicker ? (
          <div className="popover">
            <div className="cover" onClick={() => setDisplayColorPicker(false)} />
            <ChromePicker color={color} onChangeComplete={handleColorChange} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TagColor;
