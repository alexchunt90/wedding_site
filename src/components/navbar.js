import React from 'react'

const Navbar = () =>
	<nav id='weddingNav' className='navbar navbar-expand-md navbar-light bg-light fixed-top'>
		<a className='navbar-brand nav-link' id='navbar_home_link' href='#home'>Meg & Alex</a>
		<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarItems'>
			<span className='navbar-toggler-icon'></span>
		</button>

		<div id='navbarItems' className='collapse navbar-collapse'>
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item'>
					<a className='nav-link' href='#location'>Location</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='#travel'>Travel</a>
				</li>
				<li className='nav-item'>
				<a className='nav-link' href='#lodging'>Lodging</a>
				</li>		      	
				<li className='nav-item'>
					<a className='nav-link' href='#missoula'>Missoula</a>
				</li>		      									
				<li className='nav-item'>
					<a className='nav-link' href='#registry'>Registry</a>
				</li>
				<li className='nav-btn'>
					<a className='nav-link' href='#rsvp'>RSVP</a>
				</li>				
			</ul>
		</div>
	</nav>

export default Navbar