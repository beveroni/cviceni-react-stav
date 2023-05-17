import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { Uloha1 } from './Uloha1'
import { Uloha2 } from './Uloha2'
import { Uloha3 } from './Uloha3'
import { Uloha4 } from './Uloha4'
import { Uloha5 } from './Uloha5'
import { Uloha6 } from './Uloha6'
import { Uloha7 } from './Uloha7'
import { Uloha8 } from './Uloha8'
import { ZaverecnyBonus1 } from './ZaverecnyBonus1'
import { ZaverecnyBonus2 } from './ZaverecnyBonus2'
import { ZaverecnyBonus3 } from './ZaverecnyBonus3'
import { ZaverecnyBonus4 } from './ZaverecnyBonus4'

const App = () => (
	<div className='container'>
		<h1>React stav</h1>
		<h2>Úloha 1</h2>
		<Uloha1 />
		<h2>Úloha 2</h2>
		<Uloha2 />
		<h2>Úloha 3</h2>
		<Uloha3 />
		<h2>Úloha 4</h2>
		<Uloha4 />
		<h2>Úloha 5</h2>
		<Uloha5 />
		<h2>Úloha 6</h2>
		<Uloha6 />
		<h2>Úloha 7</h2>
		<Uloha7 />
		<h2>Úloha 8</h2>
		<Uloha8 />
		<h2>Závěrečný bonus 1</h2>
		<ZaverecnyBonus1 />
		<h2>Závěrečný bonus 2</h2>
		<ZaverecnyBonus2 />
		<h2>Závěrečný bonus 3</h2>
		<ZaverecnyBonus3 />
		<h2>Závěrečný bonus 4</h2>
		<ZaverecnyBonus4 />
	</div>
)

createRoot(document.querySelector('#app')).render(<App />)
