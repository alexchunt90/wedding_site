import React from 'react'
import Anchor from './anchor'
import ImageBox from './imageBox'
import HotelBox from './hotelBox'
import RegistryIcon from './registryIcon'

import hotelData from '../hotelData'

const SectionHeader = ({text}) =>
	<div className='section_header'>
		<h4 className='text-center'>
			<strong>{text}</strong>
		</h4>
		<span className='section_divider' />
	</div>

export const Section = (props) =>
	<section id={'section_' + props.id} className={'section_padding d-flex h-' + props.height}>
		<Anchor id={props.id ? props.id : ''} />
		<div className='container d-flex align-self-center'>
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
				<div>The ceremony, reception, and after-party will be held at Stone Tower Estate in Stevensville. The ceremony will start at 4:30PM, with a reception at 5:00PM and an after-party well into to the wee hours.</div>
				<div>For lodging we recommend staying in our nearby hometown of Missoula. Shuttles will be provided to and from the venue.</div>
				<div>The venue permits camping, so anyone who wants to celebrate with us past the last shuttle is welcome to sleep under the stars.</div>
			</div>
			<div className='p-2'>
				<ImageBox id='ste_inline' />
				<span className='section_divider' />
				<div>680 Home Stretch Dr, Stevensville, MT 59870, USA</div>
				<div><a href='https://goo.gl/maps/5ovZCGYMzhH2' target='_blank'>Open Map</a></div>
			</div>
		</div>
	</div>

export const TravelSection = () =>
	<div className='section_contents'>
		<SectionHeader text='Travel' />
		<div className='section_body'>
			<div>The nearest airport is Missoula International (MSO). Ticket prices tend to get pretty expensive, so if you're flying and haven't bought tickets yet, now is the time to start looking.</div>
			<div>You can sometimes save some money by booking through <a href='http://flights.google.com' target='_blank'>Google Flights</a> and booking each leg with different airlines.</div>
		</div>
	</div>

export const LodgingSection = () =>
	<div className='section_contents'>
		<SectionHeader text='Lodging' />
		<div className='section_body'>
			<div className='d-flex p-2'>For hotels, we recommend staying in Downtown Missoula. There's more to do and it's more walkable. </div>
			<HotelBox name={hotelData.red_lion.name} image_src={hotelData.red_lion.image_src} gmaps_link={hotelData.red_lion.gmaps_link} site_link={hotelData.red_lion.site_link} text={hotelData.red_lion.text}/>
			<HotelBox name={hotelData.holiday_inn.name} image_src={hotelData.holiday_inn.image_src} gmaps_link={hotelData.holiday_inn.gmaps_link} site_link={hotelData.holiday_inn.site_link} text={hotelData.holiday_inn.text}/>
			<div className='d-flex p-2'>There are few more hotels downtown, like Comfort Inn and Campus Inn. We'll update here if we can arrange any more courtesy rates. There are also some hotels out near the airport, but the area is less walkable, so probably best for people already renting a car.</div>
			<div className='d-flex p-2'>There are also a number of AirBnB and VRBO listings available, which might be the cheapest option.</div>
		</div>
	</div>

export const MontanaSection = () =>
	<div className='section_contents'>
		<SectionHeader text='Missoula' />
		<div className='section_body'>
			<div className='d-flex p-2'>We both grew up in Missoula. It's where we met. We hope while you're here you'll get to see what we love so much about it.</div>
			<div className='d-flex flex-row flex-wrap'>
				<div className='p-2'>
					<h5>Breweries</h5>
					<ul>
						<li>Kettlehouse</li>
						<li>Big Sky</li>
						<li>Tamarack</li>
						<li>Bayern</li>
						<li>DraughtWorks</li>
					</ul>
				</div>
				<div className='p-2'>
					<h5>Adventures</h5>
					<ul>
						<li>Hike Mount Sentinel and Mount Jumbo</li>
						<li>Tubing down the Clark Fork</li>
						<li>Lolo Hot Springs</li>
						<li>Garnet Ghost Town</li>
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
						<li>Mustard Seed</li>
					</ul>					
				</div>
				<div className='p-2'>
					<h5>Arts</h5>
					<ul>
						<li>Historic Wilma Theater</li>
						<li>Top Hat</li>
						<li>First Friday Gallery Night</li>
						<li>Big Sky Ampitheater</li>
					</ul>					
				</div>				
			</div>
			<div className='p-2'>
				<div>Thanks to David, who's organizing some outdoorsy activities, with possible options including whitewater rafting, scenic hikes and fishing.</div>
			</div>
			<div className='p-2'>
				<div><strong>To Sign Up: </strong><a href='https://docs.google.com/forms/d/e/1FAIpQLScc1kM1_SYa2gOeE4AOQBrEm09P3Who-lkG09NwTJj2GCwNHg/viewform'>Click Here</a> to help us choose outings.</div>
			</div>
		</div>
	</div>

export const RegistrySection = () =>
	<div className='section_contents'>
		<SectionHeader text='Registry' />
		<div className='section_body'>
			<div className='d-md-flex flex-row flex-wrap justify-content-center'>
				<div className='p-2 align-self-stretch'>
					<RegistryIcon id='bbb' link='https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=545803012&eventType=Wedding&pwsurl='/>
				</div>
				<div className='p-2 align-self-stretch'>
					<RegistryIcon id='amazon' link='https://www.amazon.com/wedding/alex-hunt-megan-hess-homeier-stevensville-august-2018/registry/SCOBR9KNF3W0'/>
				</div>
				<div className='p-2 align-self-stretch'>
					<RegistryIcon id='wayfair' link='https://www.wayfair.com/registry/wedding/AlexAndMeganForever'/>
				</div>
			</div>
			<div id='☭' className='☭ d-flex ☭ p-2 ☭'>(Registries were invented by department stores in the 1920s to sell more stuff. You really don't need to get us a gift. Many of you are already travelling to Montana to be with us; that means a lot. That said, if you would still like to give us a gift, here's some stuff we like.)</div>
		</div>
	</div>

export const RSVPSection = () =>
	<div className='section_contents'>
		<SectionHeader text="RSVP" />
		<div className='section_body'>
			<div className='d-flex p-2'>
				<div className='p-2 align-self-stretch'>
					<div className='rsvp_box'>
						<a className="btn btn-primary w-50" href='https://goo.gl/forms/qBelsfhaRcvL2d4j2' target='_blank'>RSVP</a>
					</div>
					<div>Please let us know if you can make it by June 20th, 2018, so we can be sure to have more than enough food and booze.</div>
				</div>
			</div>
		</div>
	</div>