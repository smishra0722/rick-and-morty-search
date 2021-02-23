import {combineReducers} from 'redux';

import {characterReducer} from './characters/characters.reducer';
import {cardReducer} from './card/card.reducer';

export default combineReducers({
    characters: characterReducer,
    card: cardReducer
});