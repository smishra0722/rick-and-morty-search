import {CARD_ACTION_TYPES} from './card.types';

const INITIAL_STATE = {
    data: []
}


export const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CARD_ACTION_TYPES.STORE_CARD_DATA:
            return {
                ...state,
                data: [action.payload]
            }

        default:
        return state;
    }
} 