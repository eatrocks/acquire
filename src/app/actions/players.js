import { INIT_HOTELS, SELECT_HOTEL } from '../reducers/hotels.js'

import getHotels from '../services/hotels.js'

export const setHotels = hotels => ({ type: INIT_HOTELS, hotels })

export const selectHotel = hotel => ({ type: SELECT_HOTEL, hotel })

export const init = () => dispatch =>
    getHotels().then( hotels => dispatch(setHotels(hotels)))