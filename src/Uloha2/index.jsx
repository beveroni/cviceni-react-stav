import React from 'react'

// Zadání 1: Převeď `cislo` na stavovou proměnnou.
// Zadání 2: Nastav, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku, vynulovat nastavovalo na nulu apod.

const Pocitadlo = () => {
	const cislo = 0

	return (
		<>
			<h3>Počítadlo: {cislo}</h3>
			<button>-5</button>
			<button>-1</button>
			<button>vynulovat</button>
			<button>+1</button>
			<button>+5</button>
		</>
	)
}

export const Uloha2 = () => {
	return (
		<>
			<Pocitadlo />
			<Pocitadlo />
		</>
	)
}
