import React, { useState } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'
import s from './Scan.module.css'
import { SCAN_DATA } from '../../constants'

export const Scan = () => {
	const [scanned, setScanned] = useState(null)
	const scanHandler = result => {
		setScanned(result[0].rawValue)
		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

		localStorage.setItem(
			SCAN_DATA,
			JSON.stringify(...prevData, [result[0].rawValue])
		)
	}
	const settings = {
		audio: false,
		finder: false,
	}

	return (
		<div className={s.container}>
			<Scanner
				allowMultiple={false}
				onScan={scanHandler}
				components={settings}
				styles={{ container: { width: 250 } }}
			/>
			<p className={s.result}>{scanned}</p>
		</div>
	)
}
