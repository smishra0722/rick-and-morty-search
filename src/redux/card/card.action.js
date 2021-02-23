import {CARD_ACTION_TYPES} from './card.types';

export const storeCardData = (data) => ({
    type: CARD_ACTION_TYPES.STORE_CARD_DATA,
    payload: data
})