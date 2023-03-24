import React from 'react'

export default function Bottom({data}) {
	return (
		<div className='box bottom'>
			{data?.map((talent,i)=>(
				<div key={i} className='box-talent'>
					<span>{talent}</span>
				</div>
			))}
		</div>
	)
}
