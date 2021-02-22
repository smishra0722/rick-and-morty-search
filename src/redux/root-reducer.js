import {combineReducers} from 'redux';

import {characterReducer} from './characters/characters.reducer';

export default combineReducers({
    characters: characterReducer
});