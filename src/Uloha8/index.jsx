import React from 'react';
import { useState } from 'react';

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
  const [stav, setStav] = useState('možná');

  const zmenitStav = () => {
    setStav(() => (stav === 'možná' ? 'ano' : stav === 'ano' ? 'ne' : 'možná'));
  };

  return (
    <>
      <h3>Prší v Brně: {stav}</h3>
      <button onClick={zmenitStav}>změnit</button>
    </>
  );
};
