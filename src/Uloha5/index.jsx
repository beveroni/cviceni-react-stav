import React from 'react';
import './hamburger.css';
import { useState } from 'react';

// Zadání 1: Přichystej si stavovou proměnnou s výchozí hodnotou `false`, ve které bude uloženo, jestli je menu otevřené nebo nikoliv.
// Zadání 2: Po kliknutí na button změň stav z `true` na `false` nebo obráceně.
// Zadání 3: Nerenderuj `ul`, pokud je stav `false`.
// Zadání 4: Pokud je menu zavřené nech mu jen třídu `hamburger`. Pro otevřené přidej navíc `hamburger--otevrene`.

export const Uloha5 = () => {
  const [stav, setStav] = useState(false);

  const handleClick = () => {
    setStav(!stav);
  };

  return (
    <>
      <button
        className={`hamburger ${stav ? 'hamburger--otevrene' : ''}`}
        aria-label="menu"
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {stav && (
        <ul>
          <li>
            <a href="#o-nas">O nás</a>
          </li>
          <li>
            <a href="#co-delame">Co děláme</a>
          </li>
          <li>
            <a href="#kontakty">Kontakty</a>
          </li>
          <li>
            <a href="#cenik">Ceník</a>
          </li>
        </ul>
      )}
    </>
  );
};
