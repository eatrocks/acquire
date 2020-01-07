export const INIT_HOTELS = 'INIT_HOTELS';
export const BUY_STOCK = 'BUY_STOCK';
export const SELL_STOCK = 'SELL_STOCK';
export const BANK_BUY = 'BANK_BUY';
export const BANK_SELL = 'BANK_SELL';

// TODO try this...
// Bruce: If my api returns an array of strings, and I want my state to be a lookup object, where is the proper place to transform it?
// Jared: I typically do it in the reducer
// I create a reducer to add a single item at a time to state and then dispatch each item in the array.
// export const ADD_HOTEL = 'ADD_HOTEL';
// const hotel = (state={}, action) => {
//     switch(action.type) {
//         case ADD_HOTEL:
//             return
//
//     }
//     return state;
// }


export default function hotels( state = {}, action) {
    const hotel = action.hotel;
    switch(action.type) {
        case INIT_HOTELS:
            return action.hotels

        case BUY_STOCK:
            return {
                ...state,
                [hotel]: {
                    ...state[hotel],
                    mine: state[hotel].mine++,
                    available: state[hotel].available--
                }
            }

        case SELL_STOCK:
            return {
                ...state,
                [hotel]: {
                    ...state[hotel],
                    mine: state[hotel].mine--,
                    available: state[hotel].available++
                }
            }

        case BANK_BUY:
            return {
                ...state,
                [hotel]: {
                    ...state[hotel],
                    available: state[hotel].available++
                }
            }

        case BANK_SELL:
            return {
                ...state,
                [hotel]: {
                    ...state[hotel],
                    available: state[hotel].available--
                }
            }

        default:
            return state;
    }
}
