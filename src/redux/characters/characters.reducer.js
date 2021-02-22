import {CHARACTER_ACTION_TYPES} from './characters.types';

const INITIAL_STATE = {
    isFetching: false,
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
        default:
            return state;     
    }
}