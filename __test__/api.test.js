import http from "http"
import fetch from "isomorphic-unfetch"
import listen from "test-listen"
import { apiResolver } from "next/dist/next-server/server/api-utils"


import { getJSON } from '../lib/getJSON'
import getData from '../pages/api/data'


describe('getJSON', () => {
    it('The call is successful', () => {
        return getJSON()
            .then(data => {
                expect(data.status).toBe(200)
            });
    })

    const expectedKeys = [ '_meta', 'fixtures', 'players', 'teams'];
    it('The data is correct(ish)', () => {
        return getJSON()
            .then(data => data.json())
            .then(json => {
                expect(Object.keys(json)).toEqual(expect.arrayContaining(expectedKeys))
            })
    })

})


describe("/api/data", () => {
    it("The call is successful", async () => {
        let requestHandler = (req, res) => {
            return apiResolver(req, res, undefined, getData)
        }
        let server = http.createServer(requestHandler)
        let url = await listen(server)
        let response = await fetch(url)
        expect(response.status).toBe(200)
        return server.close()
    })

})