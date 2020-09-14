import {
    DATA_SET,
    GAME_MAKE_CHOICE,
} from '../_constants'


export const setData = payload => ({
    type: DATA_SET,
    payload
})

export const makeChoice = payload => ({
    type: GAME_MAKE_CHOICE,
    payload
})