import { names as hotels } from '../services/hotels';

// This action type will be shared with palyers
// when a player buys a stock it will be reduced from the available shares (here)
// and the players reducer will add it to the player's stocks
export const BUY_STOCK = 'BUY_STOCK';

const stockObjects = hotels.reduce(
    (acc, hotel) => ({ ...acc, [hotel]: 25}),
    {}
);

export default function stocks( state = stockObjects, action) {
    switch(action.type) {
        case BUY_STOCK:
            return {
                ...state,
                [action.stock]: state[action.stock]--
            }
    }
    return state;
}