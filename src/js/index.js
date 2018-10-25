import '../scss/main.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { observer } from 'mobx-react'
import FormData from './form-data'
import CitySearch from './city-search'

@observer
class Application extends Component {
render () {
    let store = new FormData()
    return <CitySearch store={store} />
  }
}
render(<Application />, document.getElementById('app'))