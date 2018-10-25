import React, { Component } from 'react'
import CityItem from './city-item'
import { observer } from 'mobx-react'
import ismobile from 'is-mobile'

@observer
/**
 * Список отфильтрованных городов
 */
export default class CityList extends Component {
  constructor(props) {
    super(props)
  }
  // Изменили город в мобильном списке
  handleMobileChange (e) {
    this.props.store.setCurrentCity(e.target.value)
  }
  render () {
    // Показать список
    let isShow = this.props.store.filteredCities.length ? '' : 'not_display'
    // Города
    let cities = this.props.store.filteredCities.map((city, i) => {
      return (<CityItem city={city} store={this.props.store}/>)
    })
    // Если ТАП по полю, то открываем мобильный селект
    if (this.props.store.isShowSelectMobile) {
      let select = document.querySelector('#select-cities')
      select.dispatchEvent(new Event('change'));
    }
    if (ismobile()) {
      return (
        <div className='container-list not_display'>
          <select id="select-cities" value={this.props.store.currentCity} onChange={this.handleMobileChange.bind(this)}>
            { cities }
          </select>
        </div>
      )
    } else {
      return (
        <div className={`container-list ${isShow}`}>
          { cities }
        </div>
      )
    }
  }
}