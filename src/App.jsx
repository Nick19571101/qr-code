import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './components/home/Home'
import { Generate } from './components/generate/Generate'
import { Scan } from './components/scan/Scan'
import s from './App.module.css'

function App() {
	return (
		<div className={s.box}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/generate' element={<Generate />} />
					<Route path='/scan' element={<Scan />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
