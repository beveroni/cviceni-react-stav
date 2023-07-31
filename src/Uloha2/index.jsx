import React, { useState } from 'react';

// Zadání 1: Převeď `cislo` na stavovou proměnnou.
// Zadání 2: Nastav, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku, vynulovat nastavovalo na nulu apod.

const Pocitadlo = () => {
  const [cislo, setCislo] = useState(0);

  const odecist5 = () => {
    setCislo(cislo - 5);
  };

  const odecist1 = () => {
    setCislo(cislo - 1);
  };

  const vynulovat = () => {
    setCislo(0);
  };

  const pricitat1 = () => {
    setCislo(cislo + 1);
  };

  const pricitat5 = () => {
    setCislo(cislo + 5);
  };

  return (
    <>
      <h3>Počítadlo: {cislo}</h3>
      <button onClick={odecist5}>-5</button>
      <button onClick={odecist1}>-1</button>
      <button onClick={vynulovat}>vynulovat</button>
      <button onClick={pricitat1}>+1</button>
      <button onClick={pricitat5}>+5</button>
    </>
  );
};

export const Uloha2 = () => {
  return (
    <>
      <Pocitadlo />
      <Pocitadlo />
    </>
  );
};
