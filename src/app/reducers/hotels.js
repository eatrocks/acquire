export const INIT_HOTELS = 'INIT_HOTELS';
export const SELECT_HOTEL = 'SELECT_HOTEL';



export default function hotels( state = { current: '', all: [] }, action) {
    switch(action.type) {
        case INIT_HOTELS:
            return {
                current:'',
                all: action.hotels
            }

        case SELECT_HOTEL:
            return {
                all: [].concat(state.all),
                current: action.current
            };

        default:
            return state;
    }
}
