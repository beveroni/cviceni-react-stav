import React from 'react';
import { useState } from 'react';

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const soucet = number1 + number2;

  const handleZmenaHodnoty1 = (event) => {
    setNumber1(parseInt(event.target.value));
  };

  const handleZmenaHodnoty2 = (event) => {
    setNumber2(parseInt(event.target.value));
  };

  return (
    <>
      <input type="number" defaultValue="0" onChange={handleZmenaHodnoty1} /> +{' '}
      <input type="number" defaultValue="0" onChange={handleZmenaHodnoty2} /> ={' '}
      <output>{soucet}</output>
    </>
  );
};
