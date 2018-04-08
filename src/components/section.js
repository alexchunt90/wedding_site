import React from 'react'
import Anchor from './anchor'

const SectionHeader = ({text}) =>
	<div className='section_header'>
		<h4 className='text-center'>
			<strong>{text}</strong>
		</h4>
		<span className='section_divider' />
	</div>

export const Section = (props) =>
	<section className={props.padding ? 'section_padding d-flex h-100 flex-grow ' : 'd-flex h-100 flex-grow '}>
		<Anchor id={props.id ? props.id : ''} />
		<div className='container'>
			<div className='row'>
				{props.children}
			</div>
		</div>
	</section>

export const LocationSection = () =>
	<div className='section_contents'>
		<SectionHeader text='Location' />
		<p>The ceremony, reception and after-party will be held at Stone Tower Estate in Stevensville.</p>		
		<p>680 Home Stretch Dr, Stevensville, MT 59870, USA</p>
		<p>For lodging however, we recommend staying in our nearby hometown of Missoula. Shuttles will be provided to and from the venue.</p>
	</div>

export const TravelSection = () =>
	<div className='section_contents'>
		<SectionHeader text='Travel' />
		<p>The nearest airport is Missoula International (MSO). Ticket prices tend to get pretty expensive, so if you're flying and haven't bought tickets yet, now would be a good time to start looking.</p>
	</div>

export const LodgingSection = () =>
	<div className='section_contents'>
		<SectionHeader text='Lodging' />
		<p>For hotels, we recommend staying in Downtown Missoula. There's more to do and it's more walkable. </p>
		<p>There are also some hotels out near the airport, but the area is less walkable, so probably best for people already renting a car.</p>
		<p>There are also a number of AirBnB and VRBO listings available, which might be the cheapest option.</p>
	</div>

export const MontanaSection = () =>
	<div className='section_contents'>
		<SectionHeader text='Montana' />
	</div>

export const RegistrySection = () =>
	<div className='section_contents'>
		<SectionHeader text='Registry' />
	</div>

export const RSVPSection = () =>
	<div className='section_contents'>
		<SectionHeader text='RSVP' />
	</div>	