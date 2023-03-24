import React, {useState, useEffect} from 'react'

const options = {
  month: "long",
  day: "numeric",
};

export default function Middle({fromto}) {

	const [dates,setDates] = useState({})

	useEffect(()=>{
		setDates(
			{
				from: new Date(fromto.from).toLocaleDateString('en-EN', options),
				to: new Date(fromto.to).toLocaleDateString('en-EN', options),
			}
		)
	},[fromto])

	return (
		<div className='box middle'>
			<span>{dates.from} - {dates.to}</span>
		</div>
	)
}
