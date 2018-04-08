import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap'
import {jQuery, $} from 'jquery'
import Parallax from 'jquery-parallax.js'

import { updateCountdown } from './actions/actions.js'
import reducers from './reducers/reducers.js'

import LandingPageContainer from './containers/landingPageContainer'

const store = createStore(reducers)	

ReactDOM.render(
	<Provider store={store}>
		<LandingPageContainer />
	</Provider>,
  	document.getElementById('wrapper')
)

setInterval(
	() => {
		store.dispatch(updateCountdown())
	},
	1000
)