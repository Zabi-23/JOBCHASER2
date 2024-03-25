/* 
import React, { useState } from "react";

function Header({searchTerm, setSearchTerm}){
    

    const handleSerachChange = (e) => {
        setSearchTerm(e.target.value);
    };

     const handleSearchSubmit =() =>{
        console.log('Söker efter', searchTerm);
    }; 

    return(
        
        <div className="top-bar">

        <h1> JOB-CAHSER</h1>
        <div className="search-box">
        <input type="text" placeholder="Sök..."
        value={searchTerm} 
        onChange={handleSerachChange}/>

        <button type="button" onClick={handleSearchSubmit}>Sök</button>
        </div>
        </div>
       
    );
}

export default Header; */

import React from "react";

function Header({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="top-bar">
      <h1> JOB-CAHSER</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Sök..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="button">Sök</button>
      </div>
    </div>
  );
}

export default Header;
