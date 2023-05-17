import React, { useState } from 'react'
import offUrl from './off.svg'
import onUrl from './on.svg'
import './zarovka.css'

// Zadání 1: Po kliku na tlačítko `zapnout` zavolej `setJeZapnuta(true)`.
// Zadání 2: Po kliku na tlačítko `vypnout` zhasni.

export const Uloha1 = () => {
	const [jeZapnuta, setJeZapnuta] = useState(false)

	return (
		<div className="zarovka">
			<img
				src={jeZapnuta ? onUrl : offUrl}
				width={80}
				height={80}
				alt={jeZapnuta ? 'Zapnutá žárovka' : 'Vypnutá žárovka'}
				className="zarovka__ikona"
			/>
			<div className="zarovka__tlacitka">
				<button className="zarovka__tlacitko" disabled={jeZapnuta}>
					zapnout
				</button>
				<button className="zarovka__tlacitko" disabled={!jeZapnuta}>
					vypnout
				</button>
			</div>
		</div>
	)
}
