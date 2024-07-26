import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderPart from "./components/HeaderPart";
import Section1 from "./components/Section1";
import Section1left from "./components/Section1left";
import Section1Right from "./components/Section1Right";
import ImageBtn from "./components/ImageBtn";
import Section2 from "./components/Section2";
import Section2Left10 from "./components/Section2Left10";
import Section2Left11 from "./components/Section2Left11";
import Section2Left12 from "./components/Section2Left12";
import Section2Left13 from "./components/Section2Left13";
import FooterPart from "./components/FooterPart";
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const hotelSlug = 'Limpa-Peru';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/hotels/${hotelSlug}`);
        setImages(response.data.images.map(path => `http://localhost:3000/${path}`));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [hotelSlug]);

  return (
    <>
      <Helmet>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </Helmet>
      <HeaderPart />
      <hr/>
      <main>
        <Section1 />
        <div className="section1_container">
          <Section1left imageSrc={images[0]} />
          <Section1Right images={images.slice(1)} />
        </div>
        <ImageBtn images={images} />
        <Section2 slug={hotelSlug}/>
        <Section2Left10 />
        <hr />
        <Section2Left11 />
        <hr />
        <Section2Left12 />
        <hr />
        <Section2Left13 />
      </main>
      <FooterPart />
    </>
  );
}

export default App;




