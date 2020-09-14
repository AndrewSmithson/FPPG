import {
    DATA_SET,
    GAME_MAKE_CHOICE,
    GAME_START,
    GAME_END,
    GAME_RESET,
} from '../_constants'


export const setData = payload => ({
    type: DATA_SET,
    payload
})

export const makeChoice = payload => ({
    type: GAME_MAKE_CHOICE,
    payload
})


export const startGame = () => ({
    type: GAME_START,
})

export const endGame = () => ({
    type: GAME_END,
})

export const resetGame = payload => ({
    type: GAME_RESET,
    payload
})