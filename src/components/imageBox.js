import React from 'react'

const ImageBox = ({id}) =>
	<div className='section_image'>
		<img id={'image_' + id} src={'/static/images/' + id + '.jpg'} className='section_image'/>
	</div>

export default ImageBox