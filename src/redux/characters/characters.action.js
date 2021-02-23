import {CHARACTER_ACTION_TYPES} from './characters.types';


export const cardToggle = () => ({
    type: CHARACTER_ACTION_TYPES.CARD_TOGGLE
});

export const fetchingStarted = () => (
    {
        type: CHARACTER_ACTION_TYPES.IS_FETCHING,
    }
);

export const fetchSuccess = (characters) => ({
    type: CHARACTER_ACTION_TYPES.STOPPED_FETCHING,
    payload: characters
})

export const storeCharactersAsync = (characterName) => {
    return (dispatch) => {
        dispatch(fetchingStarted());

        fetch(`https://rickandmortyapi.com/api/character/?${characterName?`name=${characterName}`: ''}`).then(res => res.json()).then(data => {
            dispatch(fetchSuccess(data));
        });  
    } 
}

export const changeCharactersAsync = (characterName) => {
    return (dispatch) => {
        dispatch(fetchingStarted());

        fetch(`https://rickandmortyapi.com/api/character/?${characterName !== ''?`name=${characterName}`: ''}`).then(res => res.json()).then(data => {
            dispatch(fetchSuccess(data));
        });  
    } 
}