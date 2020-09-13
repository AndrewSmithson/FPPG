import React, { useState } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

import { initializeStore } from '../lib/store'
import { server } from '../config'

import { setData } from '../_actions'


const Wrapper = styled.div`
    width: 1000%;
    max-width: 1200px;
    margin: 0 auto;
`;



class HomePage extends React.Component {


    render() {
        return (
            <Wrapper>
                FPPG App
            </Wrapper>
        )
    }
}


export async function getStaticProps () {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    await fetch(`${server}/api/data`)
        .then(response => {
            if (response.ok)
                return response.json()
            else
                throw JSON.parse(response.statusText)
        })
        .then(data => {
            dispatch(setData(data))
        })
        .catch(err => {
            console.error(err)
        })


    return {
        props: { initialReduxState: reduxStore.getState() },
        revalidate: 60
    }

}








export default HomePage;
