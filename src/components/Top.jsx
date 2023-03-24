import React from 'react'

export default function Top({children,color}) {
	return (
		<div className='box top' style={{backgroundColor: color}}>
			<span>{children}</span>
		</div>
	)
}
