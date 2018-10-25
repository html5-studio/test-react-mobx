import cities from '../json/russia.locality.json'
import { observable, computed, action } from 'mobx'
import filter from 'lodash/filter'

export default class FormData {
    // Данные из JSON с городами
    @observable cities = cities.data.map(city => city.name)
    // Текущие отфильтрованные города
    @observable filteredCities = []
    // Вводимое значение
    @observable inputValue = ''
    // Placeholder
    @observable currentCity = "Выберите город"
    // Показать список отфильтрованных городов для мобилки
    @observable isShowSelectMobile = false

    // Установить новый город
    @action setCurrentCity(cityName) {
        this.currentCity = cityName
    }

    // Сгенерировать новый лист
    @action setNewList(val) {
        this.inputValue = val
        if (val !== '') {
            let filteredCities = filter(this.cities,function(item){
                return item.indexOf(val)>-1;
            });
            filteredCities = filteredCities.sort((a, b) => a.localeCompare(b))
            this.filteredCities = filteredCities.slice(0, 6);
        } else {
            this.filteredCities.length = 0
        }
        
    }
}