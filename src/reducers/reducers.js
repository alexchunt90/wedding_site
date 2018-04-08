import { combineReducers } from 'redux'

const calc_countdown = () => {
	const current_time = Date.now()
	const wedding_start = 1533421800000
	const ms_remaining = wedding_start - current_time
	const days_remaining = parseInt(ms_remaining / 86400000)
	const day_modulo = ms_remaining - (days_remaining * 86400000)
	const hours_remaining = parseInt(day_modulo / 3600000)
	const hour_modulo = day_modulo - (hours_remaining * 3600000)
	const minutes_remaining = parseInt(hour_modulo / 60000)
	const minute_modulo = hour_modulo - (minutes_remaining * 60000)
	const seconds_remaining = parseInt(minute_modulo / 1000)
	return {
		days_remaining: days_remaining,
		hours_remaining: hours_remaining,
		minutes_remaining: minutes_remaining,
		seconds_remaining: seconds_remaining
	}
}

const countdown = (state=calc_countdown(), action) => {
	switch(action.type) {
		case 'UPDATE_COUNTDOWN':
			return calc_countdown()
		default:
			return state
	}
}

const reducers = combineReducers({
	countdown
})

export default reducers