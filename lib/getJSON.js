import fetch from 'isomorphic-unfetch'

import { JSONLocation } from '../config'

export const getJSON = async () => fetch(JSONLocation);