import React from 'react';
import { useState } from 'react';

// Zadání 1: Pomocí události `change` na vstupním políčku a vlastnosti `event.target.value` ukládej do stavu, co uživatel napsal.
// Zadání 2: Mezi tagy `<b></b>` vlož napsaný text.
// Zadání 3. V dalším odstavci `<p>` zobraz, kolik má text znaků.
// Zadání 4. Poslední odstavec zobraz pouze v případě, že je text kratší než 8 znaků.

export const ZaverecnyBonus1 = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const characterCount = text.length;
  const isShortText = text.length < 8;

  return (
    <>
      <label>
        Napiš něco: <input onChange={handleInputChange} />
      </label>
      <p>
        Do políčka výše uživatel napsal: <b>{text}</b>
      </p>
      <p>Počet znaků: {characterCount}</p>
      {isShortText && <p>Jako heslo by text neobstál.</p>}
    </>
  );
};
