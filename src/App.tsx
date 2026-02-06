import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

// Students
import type { JSX } from 'react'
import Farid from './pages/farid/Farid'
import Fozil from './pages/fozil/homepage'
import Ilhom from './pages/Ilhom/homepage'
import Mentor from './pages/mentor/Mentor'
import Ozodbek from './pages/ozodbek/homepage'

const App = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/mentor' element={<Mentor />} />
			<Route path='/students/farid' element={<Farid />} />
			<Route path='/students/fozil' element={<Fozil />} />
			<Route path='/students/ozodbek' element={<Ozodbek />} />
			<Route path='/students/Ilhom' element={<Ilhom />} />
		</Routes>
	)
}

export default App
