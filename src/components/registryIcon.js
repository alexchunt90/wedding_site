import React from 'react'

const RegistryIcon = ({id, link}) =>
	<div className='registry_box'>
		<a href={link} target='_blank'>
			<img src={'/static/icons/' + id + '.png'} className='d-block' />
		</a>
	</div>

export default RegistryIcon