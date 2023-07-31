import React from 'react';
import './carousel.css';
import { useState } from 'react';

// Zadání 1: Nachystej si adresy obrázků níže do pole.
// Zadání 2: Přidej komponentě stavovou proměnnou, ve které bude index právě aktivního obrázku. Na začátku 0.
// Zadání 3: Pro `src` v tagu `img` použij adresu z pole pod správným indexem.
// Zadání 4: Tlačítky ← a → měň index.

// Bonus: Pozor na krajní hodnoty. Pokud dojdeš na konec nebo začátek pole, tak už v daném směru neměň index, aby ti neutekl mimo položky v poli. Nastav tlačítkům atribut `disabled`, pokud v jejich směru už není žádný obrázek.

/*
	Adresy obrázků:
	https://source.unsplash.com/WLUHO9A_xik/880x500
	https://source.unsplash.com/DA1eGglMmlg/880x500
	https://source.unsplash.com/kTxL6le0Wgk/880x500
	https://source.unsplash.com/7go5UASxmDY/880x500
	https://source.unsplash.com/YmATDIFsCmQ/880x500
*/
const imageUrl1 = 'https://source.unsplash.com/WLUHO9A_xik/880x500';
const imageUrl2 = 'https://source.unsplash.com/DA1eGglMmlg/880x500';
const imageUrl3 = 'https://source.unsplash.com/kTxL6le0Wgk/880x500';
const imageUrl4 = 'https://source.unsplash.com/7go5UASxmDY/880x500';
const imageUrl5 = 'https://source.unsplash.com/YmATDIFsCmQ/880x500';

const imageUrls = [imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5];

export const Uloha4 = () => {
  const [index, setIndex] = useState(0);
  const predchozi = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? imageUrls - 1 : prevIndex - 1));
  };

  const dalsi = () => {
    setIndex((prevIndex) => (prevIndex === imageUrls - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button
        className="carousel__predchozi"
        aria-label="předchozí"
        onClick={predchozi}
      >
        ←
      </button>
      <div className="carousel__media">
        <img className="carousel__image" src={imageUrls[index]} alt="" />
      </div>
      <button className="carousel__dalsi" aria-label="další" onClick={dalsi}>
        →
      </button>
    </div>
  );
};
