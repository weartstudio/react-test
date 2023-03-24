import React from 'react'

export default function Bottom({data,color}) {
	return (
		<div className='box bottom'>
			{data?.map((talent,i)=>(
				<div key={i} className='box-talent' style={{backgroundColor: color}}>
					<span>{talent}</span>
				</div>
			))}
		</div>
	)
}
