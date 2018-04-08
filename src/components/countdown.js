import React from 'react'
import { connect } from 'react-redux'

const CountdownComponent = ({countdown}) =>
	<div className='countdown'>
		{countdown.days_remaining} Days, {countdown.hours_remaining} Hours, {countdown.minutes_remaining} Minutes and {countdown.seconds_remaining} Seconds
	</div>

const mapStateToProps = state => {
	return {
		countdown: state.countdown,
	}
}

const Countdown = connect(mapStateToProps)(CountdownComponent)

export default Countdown