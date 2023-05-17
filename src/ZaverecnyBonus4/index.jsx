import React from 'react'

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
	return (
		<>
			<input type="number" defaultValue="0" /> +{' '}
			<input type="number" defaultValue="0" /> = <output>0</output>
		</>
	)
}
