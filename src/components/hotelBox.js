import React from 'react'

const HotelBox = ({name, image_src, gmaps_link, site_link, text}) =>
	<div>
		<div className='d-flex flex-row'>
			<div className='w-25 p-2'>
				<h5 className='hotel_header'>{name}</h5>
				<div className='hotel_image'>
					<img src={'/static/images/' + image_src} />
				</div>	
			</div>
			<div className='w-75 p-2'>
				<div>{text}</div>
				<div><a href={gmaps_link} target='_blank'>Open Map</a> | <a href={site_link} target='_blank'>Website</a></div>
			</div>
		</div>
	</div>

export default HotelBox