

import { reducePlayer, reduceFixture, reduceTeam } from '../lib/reducers'

const examplePlayer = {
    first_name: "Udonis",
    fixture: {
        _members: ["112164"],
        _ref: "fixtures.id"
    },
    fppg: 4.837837837837838,
    id: "15475-9589",
    images: {
        default: {
            height: 200,
            url: "https://d17odppiik753x.cloudfront.net/playerimages/nba/9589.png",
            width: 200
        }
    },
    injured: false,
    injury_details: null,
    injury_status: null,
    last_name: "Haslem",
    news: {
        latest: "2016-04-16T16:18:25Z"
    },
    played: 37,
    player_card_url: "https://www.fanduel.com/e/Player/9589/Stats/15475",
    position: "PF",
    removed: false,
    salary: 3500,
    starting_order: null,
    team: {
        _members: ["693"],
        _ref: "teams.id"
    }
}

describe('Player reducer', () => {

    it('Removed players are not returned', () => {
        expect(reducePlayer({removed: true})).toBe(null)
    })

    it('The returned structure is usable', () => {
        const reduced = reducePlayer(examplePlayer);
        const expectedId = examplePlayer.id.replace('-','');
        const requiredProperties = ['fppg', 'id', 'first_name', 'last_name'];

        // Confirm the player's id
        expect(Object.keys(reduced)[0]).toEqual(expectedId)

        const reducedPlayer = reduced[expectedId];

        // Confirm the essential data is there
        expect(Object.keys(reducedPlayer)).toEqual(expect.arrayContaining(requiredProperties))
        
        const { fppg, id, first_name, last_name} = reducedPlayer;
        expect(typeof fppg).toBe('number')
        expect(typeof id).toBe('string')
        expect(typeof first_name).toBe('string')
        expect(typeof last_name).toBe('string')

    })

    
})



const exampleFixture = {
    away_team: {
        score: null,
        team: {
            _members: ["693"],
            _ref: "teams.id"
        }
    },
    home_team: {
        score: null,
        team: {
            _members: ["706"],
            _ref: "teams.id"
        }
    },
    id: "112164",
    sport: "NBA",
    start_date: "2016-05-04T00:00:00Z",
    status: null
}

describe('Fixture reducer', () => {

    it('The returned structure is usable', () => {
        const reduced = reduceFixture(exampleFixture);
        const expectedId = exampleFixture.id;
        const requiredProperties = ['id', 'away_team', 'home_team'];

        // Confirm the fixture's id
        expect(Object.keys(reduced)[0]).toEqual(expectedId)

        const reducedFixture = reduced[expectedId];

        // Confirm the essential data is there
        expect(Object.keys(reducedFixture)).toEqual(expect.arrayContaining(requiredProperties))
        
        const { id, away_team, home_team} = reducedFixture;
        expect(typeof id).toBe('string')
        expect(typeof away_team).toBe('string')
        expect(typeof home_team).toBe('string')

    })

    
})



const exampleTeam = {
    "away_team": {
        "score": null,
        "team": {
            "_members": ["693"],
            "_ref": "teams.id"
        }
    },
    "home_team": {
        "score": null,
        "team": {
            "_members": ["706"],
            "_ref": "teams.id"
        }
    },
    "id": "112164",
    "sport": "NBA",
    "start_date": "2016-05-04T00:00:00Z",
    "status": null
}

describe('Team reducer', () => {

    it('The returned structure is usable', () => {
        const reduced = reduceTeam(exampleTeam);
        const expectedId = exampleTeam.id;
        const requiredProperties = ['id'];

        // Confirm the fixture's id
        expect(Object.keys(reduced)[0]).toEqual(expectedId)

        const reducedTeam = reduced[expectedId];

        // Confirm the essential data is there
        expect(Object.keys(reducedTeam)).toEqual(expect.arrayContaining(requiredProperties))
        
        const { id, } = reducedTeam;
        expect(typeof id).toBe('string')

    })

    
})

