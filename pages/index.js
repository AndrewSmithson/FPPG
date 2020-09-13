import React from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())


const Wrapper = styled.div`
    width: 1000%;
    max-width: 1200px;
    margin: 0 auto;
`;


export default function Index() {

    const { data, error } = useSWR('/api/data', fetcher)
  
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    console.log(data)
    return (
        <Wrapper>
            FPPG App
        </Wrapper>
    )
}

