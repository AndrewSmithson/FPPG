import { combineReducers } from 'redux';

import {reducer as gameReducer , initialState as gameReducerState } from './game';
import {reducer as dataReducer , initialState as dataReducerState } from './data';

export const rootReducer =  combineReducers({
    game: gameReducer,
    data: dataReducer,
});

export const rootState = {
    game: gameReducerState,
    data: dataReducerState,
};
