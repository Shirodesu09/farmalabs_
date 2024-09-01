import React, { useState, useEffect } from 'react';

function Dropdown({ options, handleDuration }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (options && options.length > 0) {
      setSelectedOption(options[0]);
    }
  }, [options]);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleDuration(option);
  };

  return (
    <div style={styles.dropdown}>
      <span style={styles.dropdownLabel}>Show:</span>
      <button style={styles.dropdownButton} onClick={handleDropdownToggle}>
        {selectedOption}
        <span style={styles.dropdownIcon}>▼</span>
      </button>
      {isOpen && (
        <div style={styles.dropdownContent}>
          {options.map((option, index) => (
            <div
              key={index}
              style={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  dropdown: {
    display: 'inline-block',
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
  },
  dropdownLabel: {
    color: '#4C5862',
    marginRight: '5px',
  },
  dropdownButton: {
    background: 'none',
    border: 'none',
    color: '#F5A623',
    cursor: 'pointer',
    fontSize: '16px',
    position: 'relative',
    paddingRight: '20px',
  },
  dropdownIcon: {
    fontSize: '10px',
    marginLeft: '5px',
    color: '#ccc',
    position: 'absolute',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  dropdownContent: {
    display: 'block',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '100px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  dropdownItem: {
    color: 'black',
    padding: '8px 12px',
    textDecoration: 'none',
    display: 'block',
    cursor: 'pointer',
  },
  dropdownItemHover: {
    backgroundColor: '#f1f1f1',
  },
};

export default Dropdown;
