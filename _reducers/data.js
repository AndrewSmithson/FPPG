import { SET_DATA } from '../_constants';



export const initialState = {
    players: {},
    teams: {},
    fixtures: {},
}

export function reducer(state = initialState, action) {

    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default: return state
    }
}
