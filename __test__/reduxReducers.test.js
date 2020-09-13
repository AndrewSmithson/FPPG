
import {reducer as gameReducer , initialState as gameReducerState } from '../_reducers/game';
import {reducer as dataReducer , initialState as dataReducerState } from '../_reducers/data';
import * as actions from '../_actions'
import * as types from '../_constants'



describe('game Reducer', () => {

    it('should return the initial state', () => {
        expect(gameReducer(undefined, {})).toEqual({
            rounds: 10,
            roundsComplete: 0,
            playersCompared: [],
        })
    })

})



describe('data Reducer', () => {

    it('should return the initial state', () => {
        expect(dataReducer(undefined, {})).toEqual({
            players: {},
            teams: {},
            fixtures: {},
        })
    })

    it('SET_DATA', () => {
        expect(
            dataReducer(undefined, {
                type: types.SET_DATA,
                payload: {
                    players: {},
                    teams: {},
                    fixtures: {}
                }
            })
        ).toEqual({
            players: {},
            teams: {},
            fixtures: {}
        })

        expect(
            dataReducer(
                {
                    players: {123:'Alpha'},
                    teams: {456:'Bravo'},
                    fixtures: {789:'Charlie'}
                },
                {
                    type: types.SET_DATA,
                    payload: {
                        players: {321:'Xray'},
                        teams: {654:'Yankee'},
                        fixtures: {987:'Zulu'}
                    }
                }
            )
        ).toEqual({
            players: {321:'Xray'},
            teams: {654:'Yankee'},
            fixtures: {987:'Zulu'}
        })
    })
})