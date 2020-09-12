import { getJSON } from '../lib/getJSON'


describe('Check the data being retrieved is good', () => {
    test('The call is successful', () => {
        return getJSON()
            .then(data => {
                expect(data.status).toBe(200)
            });
    })

    const expectedKeys = [ '_meta', 'fixtures', 'players', 'teams'];
    test('The data is correct(ish)', () => {
        return getJSON()
            .then(data => data.json())
            .then(json => {
                expect(Object.keys(json)).toEqual(expect.arrayContaining(expectedKeys))
            })
    })
})
