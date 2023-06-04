import React from 'react';
import './header.style.css';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        background: ' #fefefe',
      }}
    >
      <div>
      <img src={require('./omandata.png')}  
        alt="Oman Data"
        style={{ width: '200px' }} // Adjust the width as needed
        />
      </div>
      <div >
        <input
        className='search-box'
          type="text"
          placeholder="Search..."
          style={{ padding: '5px', borderRadius: '5px', border: 'none' }}
        />
        <button className='curved-button' style={{ marginLeft: '5px', padding: '5px' }}>Search</button>
      </div>
    </header>
  );
};

export default Header;
