import React from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

import { server } from '../config'


const Wrapper = styled.div`
    width: 1000%;
    max-width: 1200px;
    margin: 0 auto;
`;



class HomePage extends React.Component {

    render() {
        console.log(this.props)
        return (
            <Wrapper>
                FPPG App
            </Wrapper>
        )
    }
}


export async function getStaticProps () {
    const data = await fetch(`${server}/api/data`)
        .then(response => {
            if (response.ok)
                return response.json()
            else
                throw JSON.parse(response.statusText)
        })
        .catch(err => {
            console.error(err)
        })

    return {
        props: {
            data
        },
        revalidate: 60
    }

}








export default HomePage;
