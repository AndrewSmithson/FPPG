import { DATA_SET } from '../_constants';



export const initialState = {
    players: {},
    teams: {},
    fixtures: {},
}

export function reducer(state = initialState, action) {

    switch (action.type) {
        case DATA_SET:
            return {
                ...state,
                ...action.payload,
            }

        default: return state
    }
}
