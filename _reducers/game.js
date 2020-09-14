import {
    DATA_SET,
    GAME_MAKE_CHOICE
} from '../_constants';

import { generateRounds } from '../lib/generateRounds'


export const initialState = {
    maxRounds: 10,
    currentRound: 0,
    roundsCorrect: 0,
    rounds: {}

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
                roundsCorrect: action.payload ? state.roundsCorrect + 1 : state.roundsCorrect,
                rounds: {
                    ...state.rounds,
                    [state.currentRound]: {
                        ...state.rounds[state.currentRound],
                        guess: action.payload
                    }
                }
            }


        default: return state
    }
}
