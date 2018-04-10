import React from 'react'

import { Section } from '../components/section'

const ImageDivider = ({image, offsetY=0}) =>
	<div className='parallax-window d-flex h-50 flex-grow' data-parallax='scroll' data-image-src={'/static/images/' + image + '.jpg'} data-position-y={offsetY + 'px'}>
	</div>

export default ImageDivider