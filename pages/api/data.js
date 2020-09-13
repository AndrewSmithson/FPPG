import { getJSON } from '../../lib/getJSON'


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
            res.end(JSON.stringify(response));
    
        })
        .catch(err => {

            res.statusCode = 500
            console.error(err)
            res.end()

        })

}

export default getData