import React, { Component } from 'react'
import ismobile from 'is-mobile'
import { observer } from 'mobx-react'

@observer
/**
 * Класс с отображением одного города в списке
 */
export default class CityItem extends Component {
  constructor (props) {
    super(props)
  }
  // Установить новый город
  setCity(e) {
    this.props.store.setCurrentCity(this.props.city)
    this.props.store.setNewList('')
  }
  render () {
    // Подсветить ввыодимые данные в списке город
    let city = this.props.city;
    city = city.split(this.props.store.inputValue);
    if (ismobile()) {
      return (
        <option name={this.props.city} value={this.props.city}>{this.props.city}</option>
      )
    } else {
      return (
        <div className='item-city'>
          <p onClick={this.setCity.bind(this, )}>
            {city[0]}<span class="input-colorize">{this.props.store.inputValue}</span>{city[1]}
          </p>
        </div>
      )
    }
  }
}