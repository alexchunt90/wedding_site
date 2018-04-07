import React from 'react'
import { connect } from 'react-redux'

import Navbar from '../components/navbar'

const LandingPageContainer = () =>
	<div>
		<Navbar />
		<div id='wedding_landing_container' className='container-fluid'>
			<div className="row">
				Alex and Megan Wedding Site
			</div>
		</div>
	</div>

export default LandingPageContainer