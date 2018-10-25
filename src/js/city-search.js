import React, { Component } from 'react'
import { observer } from 'mobx-react'
import CityList from './city-list'
import ismobile from 'is-mobile'
import ReactTouchEvents from "react-touch-events";


@observer
export default class CitySearch extends Component {
  constructor (props) {
    super(props)  
  }
  // Поиск по вводимому значению
  search (e) {
    this.props.store.setNewList(e.target.value)
  }
  // Нажали на мобилке
  handleTap (e) {
    this.props.store.isShowSelectMobile = true
  }
  render () {
    // Определяет высоту экрана для определения стороны выпадения (вверх, вниз)
    // на мобилке нативное выпадение, поэтому всегда вниз
    let orientationRevert = window.innerHeight < 700 && !ismobile() ? 'up' : 'down'
    // Если список выпадает вверх, то не показываем placeholder
    let isShowLabel = this.props.store.filteredCities.length && orientationRevert === 'up' ? 'not_display' : '' 
    return (
      <div className={`search-container ${orientationRevert}`}>
          <ReactTouchEvents onTap={ this.handleTap.bind(this) }>
            <input 
              className='input-city'
              ref='searchInput'
              onKeyUp={this.search.bind(this)}
              type='text'
              id='search-cities'
              />
          </ReactTouchEvents>
          <ReactTouchEvents onTap={ this.handleTap.bind(this) }>
            <label className={isShowLabel} for="search-cities">{this.props.store.currentCity}</label>
          </ReactTouchEvents>
          <CityList store={this.props.store}/>
      </div>
    )
  }
}
