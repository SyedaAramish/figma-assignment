import React from 'react';
import Image from 'next/image';
import Header from './components/header'; // Adjust the path as per your folder structure
import './globals.css'; // Import global CSS

const HomePage = () => {
  return (
    <>
      <Header /> {/* This will render the header with Cyber and search */}
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <Image
          src="/image/Banner.jpg" // Ensure this path is correct
          alt="Background image"
          layout="fill"
          objectFit="cover" 
          quality={100} // Ensures high image quality
        />
        <div className="buttonContainer">
          <button className="searchButton">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
