import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import s from './Generate.module.css'
import { GENERATE_DATA } from '../../constants.js'

export const Generate = () => {
	const [value, setValue] = useState('')
	const [result, setResult] = useState('')
	const onClickHandler = () => {
		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
		localStorage.setItem(GENERATE_DATA, JSON.stringify(...prevData, value))
		setResult(value)
		setValue('')
	}
	const onChangeHandler = event => {
		setValue(event.target.value)
		setResult('')
	}
	return (
		<div className={s.container}>
			<input
				type='text'
				value={value}
				placeholder='Введіть текст'
				onChange={onChangeHandler}
				className={s.input}
			/>
			<button type='button' onClick={onClickHandler} className={s.button}>
				Генерувати QRcode
			</button>
			{result !== '' && (
				<div className={s.qrWrapper}>
					<QRCodeSVG value={result} size={250} />
				</div>
			)}
		</div>
	)
}
