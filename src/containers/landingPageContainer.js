import React from 'react'
import { connect } from 'react-redux'

import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'
import ImageDivider from '../components/imageDivider'
import { Section, TravelSection, LocationSection, LodgingSection, MontanaSection, RegistrySection, RSVPSection } from '../components/section'

const SectionSpacer = ({}) => 
	<span className='section_anchor'></span>

const LandingPageContainer = () =>
	<div>
		<Navbar />
		<div className='content'>
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
			<ImageDivider image='missoula'/>
			<Section id='montana' padding={false}>
				<MontanaSection />
			</Section>
			<Section id='registry' padding={false}>
				<RegistrySection />
			</Section>
			<Section id='rsvp' padding={false}>
				<RSVPSection />
			</Section>						
		</div>
	</div>

export default LandingPageContainer