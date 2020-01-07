import { INIT_HOTELS, BUY_STOCK, SELL_STOCK, BANK_BUY, BANK_SELL } from '../reducers/hotels.js'
import getHotels from '../services/hotels.js'

export const setHotels = hotels => ({ type: INIT_HOTELS, hotels: hotels })
export const buyStock = hotelName => ({type: BUY_STOCK, hotel: hotelName})
export const sellStock = hotelName => ({type: SELL_STOCK, hotel: hotelName})
export const bankBuy = hotelName => ({type: BANK_BUY, hotel: hotelName})
export const bankSell = hotelName => ({type: BANK_SELL, hotel: hotelName})

export const init = () => dispatch =>
    //getHotels().then( hotels => dispatch(setHotels(hotels)))
    dispatch(setHotels(getHotels()))
