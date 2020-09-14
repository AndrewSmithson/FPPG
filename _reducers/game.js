import {
    DATA_SET,
    GAME_MAKE_CHOICE,
    GAME_START,
    GAME_RESET,
} from '../_constants';

import { generateRounds } from '../lib/generateRounds'


export const initialState = {
    maxRounds: 10,
    currentRound: 0,
    roundsCorrect: 0,
    rounds: {},
    flags: {
        gameStarted: false,
        gameComplete: false,
    }

}

export function reducer(state = initialState, action) {

    switch (action.type) {

        case DATA_SET:
            return {
                ...state,
                rounds: generateRounds(Object.keys(action.payload.players), state.maxRounds)
            }

        case GAME_MAKE_CHOICE:
            return {
                ...state,
                currentRound: state.currentRound + 1,
                roundsCorrect: action.payload.guess ? state.roundsCorrect + 1 : state.roundsCorrect,
                rounds: {
                    ...state.rounds,
                    [state.currentRound]: {
                        ...state.rounds[state.currentRound],
                        selection: action.payload.selection,
                        guess: action.payload.guess
                    }
                },
                flags: {
                    ...state.flags,
                    gameComplete: state.currentRound + 1 === state.maxRounds
                }
            }

        case GAME_START:
            return {
                ...state,
                flags: {
                    ...state.flags,
                    gameStarted: true,
                }
            }

        case GAME_RESET:
            return {
                ...state,
                currentRound: 0,
                roundsCorrect: 0,
                rounds: generateRounds(Object.keys(action.payload), state.maxRounds),
                flags: {
                    ...state.flags,
                    gameStarted: false,
                    gameComplete: false,
                }
            }

        default: return state
    }
}
