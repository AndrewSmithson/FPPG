import { getJSON } from '../../lib/getJSON'
import { reducePlayer, reduceFixture, reduceTeam } from '../../lib/reducers'


// For the sake of simplicity this endpoint will only return a 200 of a 500
const getData = async (req, res) => {

    await getJSON().then(response => {

            if (response.ok)
                return response.json()
            else
                throw JSON.parse()

        }).then(response => {

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');

            const reducedData = {
                players: {},
                fixtures: {},
                teams: {}
            }

            response.players.forEach(player => {
                let reduced = reducePlayer(player);
                if(reduced)
                    reducedData.players = {
                        ...reducedData.players,
                        ...reduced
                    }
            })

            response.fixtures.forEach(fixture => {
                let reduced = reduceFixture(fixture);
                if(reduced)
                    reducedData.fixtures = {
                        ...reducedData.fixtures,
                        ...reduced
                    }
            })

            response.teams.forEach(team => {
                let reduced = reduceTeam(team);
                if(reduced)
                    reducedData.teams = {
                        ...reducedData.teams,
                        ...reduced
                    }
            })

            res.end(JSON.stringify(reducedData));
    
        })
        .catch(err => {

            res.statusCode = 500
            console.error(err)
            res.end()

        })

}

export default getData