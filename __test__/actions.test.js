import * as actions from '../_actions'
import * as types from '../_constants'

describe('Actions', () => {
  it('getData', () => {
    const payload = {players: {}, teams: {}, fixtures: {}};
    const expectedAction = {
        type: types.SET_DATA,
        payload
    }
    expect(actions.setData(payload)).toEqual(expectedAction)
  })
})