import {
    DATA_SET,
    GAME_MAKE_CHOICE
} from '../_constants';

import { generateRounds } from '../lib/generateRounds'


export const initialState = {
    maxRounds: 10,
    roundsComplete: 0,
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
                roundsComplete: state.roundsComplete++,
                roundsCorrect: payload.correct,
            }


        default: return state
    }
}
