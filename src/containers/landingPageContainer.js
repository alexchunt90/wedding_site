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
			<Section id='location' height={100}>
				<LocationSection />
			</Section>
			<ImageDivider image='stone_tower_estate'/>
			<Section id='travel' height={50}>
				<TravelSection />
			</Section>
			<ImageDivider image='us_1'/>
			<Section id='lodging' height={100}>
				<LodgingSection />
			</Section>
			<ImageDivider image='missoula' offsetY={0}/>
			<Section id='missoula' height={100}>
				<MontanaSection />
			</Section>
			<ImageDivider image='us_2'/>
			<Section id='registry' height={100}>
				<RegistrySection />
			</Section>
			<ImageDivider image='missoula2' offsetY={0}/>
			<Section id='rsvp' height={50}>
				<RSVPSection />
			</Section>			
		</div>
	</div>

export default LandingPageContainer