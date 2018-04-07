 import React from 'react'

const Navbar = () =>
	<nav className='navbar navbar-expand-md navbar-light bg-light'>
		<a className='navbar-brand' href='#home' data-id='home'>Alex & Meg</a>
		<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarItems'>
			<span className='navbar-toggler-icon'></span>
		</button>

		<div id='navbarItems' className='collapse navbar-collapse'>
			<ul className='navbar-nav ml-auto'>
				<li className='nav-item'>
					<a className='nav-link' href='/notes'>Travel</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' href='/notes'>Accomodations</a>
				</li>		      	
				<li className='nav-item'>
					<a className='nav-link' href='/notes'>Missoula</a>
				</li>		      									
				<li className='nav-item'>
					<a className='nav-link' href='/edit'>Registry</a>
				</li>
				<li className='nav-btn'>
					<a className='nav-link' href='/edit'>RSVP</a>
				</li>				
			</ul>
		</div>
	</nav>

const string = "<li className='nav-item'><a className='nav-link' href='/search'>Search</a></li><li className='nav-item'><a className='nav-link' href='/about'>About</a></li>"

export default Navbar