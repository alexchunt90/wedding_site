import React from 'react'

const RegistryIcon = ({id}) =>
	<div className='registry_box'>
		<a href='' target='_blank'>
			<img src={'/static/icons/' + id + '.png'} className='d-inline-flex align-self-center' />
		</a>
	</div>

export default RegistryIcon