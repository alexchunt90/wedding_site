import React from 'react'
import Anchor from './anchor'
import ImageBox from './imageBox'
import RegistryIcon from './registryIcon'

const SectionHeader = ({text}) =>
	<div className='section_header'>
		<h4 className='text-center'>
			<strong>{text}</strong>
		</h4>
		<span className='section_divider' />
	</div>

export const Section = (props) =>
	<section className={'section_padding d-flex h-' + props.height + ' flex-grow'}>
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
		<div className='section_body d-flex flex-row'>
			<div className='p-2'>
				<p>The ceremony, reception, and after-party will be held at Stone Tower Estate in Stevensville. The ceremonly will start at 4:30PM, with a reception at 5:00PM and an after-party well into to the wee hours.</p>
				<p>For lodging we recommend staying in our nearby hometown of Missoula. Shuttles will be provided to and from the venue.</p>
				<p>The venue permits camping, so anyone who wants to celebrate with us past the last shuttle is welcome to sleep under the stars.</p>
			</div>
			<div className='p-2'>
				<ImageBox id='ste_inline' />
				<span className='section_divider' />
				<p>680 Home Stretch Dr, Stevensville, MT 59870, USA</p>
				<p><a href='https://goo.gl/maps/5ovZCGYMzhH2' target='_blank'>Open Map</a></p>
			</div>
		</div>
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
		<SectionHeader text='Missoula' />
		<div className='section_body'>
			<div className='d-flex p-2'>We both grew up in Missoula. It's where we met. We hope while you're here you'll get to see what we love so much about it.</div>
			<div className='d-flex flex-row'>
				<div className='p-2'>
					<h5>Breweries</h5>
					<ul>
						<li>Kettlehouse</li>
						<li>Big Sky</li>
						<li>Tamarack</li>
						<li>Bayern</li>
						<li>DraughtWorks</li>
					</ul>
					<h5>Adventures</h5>
					<ul>
						<li>Hike Mount Sentinel or Mount Jumbo</li>
						<li>Tubing down the Clark Fork</li>
						<li>Drive out to Glacier or Yellowstone National Park</li>
					</ul>				
				</div>
				<div className='p-2'>
					<h5>Good Eats</h5>
					<ul>
						<li>Taco Del Sol</li>
						<li>Bridge Pizza</li>
						<li>James Bar</li>
						<li>The Pearl</li>
					</ul>					
				</div>
			</div>
			<div className='p-2'>
				<p>With some help from our friends, we're hoping to set up a few outdoorsy outings, possibly white-water rafting or a hike with scenic views. If you're interested, <a href='mailto:alexandmegforever@gmail.com' target='_blank'>let us know!</a></p>
			</div>

		</div>
	</div>

export const RegistrySection = () =>
	<div className='section_contents'>
		<SectionHeader text='Registry' />
		<div className='section_body d-flex flex-row'>
			<div className='p-2 align-self-stretch'>
				<RegistryIcon id='bbb' />
			</div>
			<div className='p-2 align-self-stretch'>
				<RegistryIcon id='amazon' />
			</div>
			<div className='p-2 align-self-stretch'>
				<RegistryIcon id='amazon' />
			</div>
		</div>
	</div>

export const RSVPSection = () =>
	<div className='section_contents'>
		<SectionHeader text='RSVP' />
	</div>	