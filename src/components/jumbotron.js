import React from 'react'

import Countdown from './countdown'

const Jumbotron = () =>
	<div id='home' className='jumbotron jumbotron_main parallax-window d-flex h-100 flex-grow' data-parallax='scroll' data-image-src='/static/images/bg.jpg' data-position-y='0px'>
		<div className='jumbotron_contents'>
			<h1 className='display-4'>Meg & Alex are getting married!</h1>
			<span className='section_divider' />
			<Countdown />
			<span className='section_divider' />
			<h3>Stone Tower Estate, Stevensville MT</h3>
			<h4><strong>680 Home Stretch Dr, Stevensville, MT 59870, USA</strong></h4>
		</div>
	</div>

export default Jumbotron