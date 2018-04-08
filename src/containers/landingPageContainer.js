import React from 'react'
import { connect } from 'react-redux'

import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'
import ImageDivider from '../components/imageDivider'
import { Section, TravelSection, LocationSection, LodgingSection, MontanaSection, RegistrySection, RSVPSection } from '../components/section'

const LandingPageContainer = () =>
	<div>
		<Navbar />
		<div className='content' data-spy='scroll' data-target='#weddingNav' data-offset='62'>
			<Jumbotron />
			<Section id='location' padding={true}>
				<LocationSection />
			</Section>
			<ImageDivider image='stone_tower_estate'/>
			<Section id='travel' padding={false}>
				<TravelSection />
			</Section>
			<Section id='lodging' padding={false}>
				<LodgingSection />
			</Section>
			<Section id='montana' padding={false}>
				<MontanaSection />
			</Section>
			<ImageDivider image='stone_tower_estate'/>
			<Section id='registry' padding={false}>
				<RegistrySection />
			</Section>
			<Section id='rsvp' padding={false}>
				<RSVPSection />
			</Section>						
		</div>
	</div>

export default LandingPageContainer