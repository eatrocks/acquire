import { names as hotels } from '../services/hotels';

export const ADD_PLAYER = 'ADD_PLAYER';

const stocks = hotels.reduce(
    (acc, hotel) => ({ ...acc, [hotel]: 0}),
    {}
);

const newPlayer = (name) => ({ name, stocks: {...stocks} });

export default function players( state = [newPlayer('Me')], action) {
    switch(action.type) {
        case ADD_PLAYER:
            return [
                ...state,
                newPlayer(action.name)
            ];
    }
    return state;
}
