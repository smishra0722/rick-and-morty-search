import {CHARACTER_ACTION_TYPES} from './characters.types';

const INITIAL_STATE = {
    isFetching: false,
    cardToggle: false,
    characters: []
}

export const characterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHARACTER_ACTION_TYPES.IS_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case CHARACTER_ACTION_TYPES.STOPPED_FETCHING:
            return {
                ...state,
                isFetching: false,
                characters: action.payload
            }
        case CHARACTER_ACTION_TYPES.CARD_TOGGLE:
            return {
                ...state,
                cardToggle: !state.cardToggle
            }
        default:
            return state;     
    }
}