import React from 'react'

import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
	return (
		<nav className={s.container}>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/generate'>Generation</NavLink>
			<NavLink to='/scan'>Scannig</NavLink>
		</nav>
	)
}
