import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '../navigation/Navigation'
import s from './Layout.module.css'

export const Layout = () => {
	return (
		<>
			<Navigation />
			<div className={s.content}>
				<Outlet />
			</div>
			<footer
				className={s.footer}
			>{`Всі права захищені. ${new Date().getFullYear()} (C)`}</footer>
		</>
	)
}
