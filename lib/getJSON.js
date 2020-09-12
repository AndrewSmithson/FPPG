import fetch from 'isomorphic-unfetch'

import { JSONLocation } from '../config'

export const getJSON = async () => fetch(JSONLocation);

// export const getJSON = async () => {
//     const JSON = await fetch(JSONLocation)
//         .then(response => {
//             return response})
//             // console.log(JSON)
//         return JSON
//         };