import React from 'react'
import styled from 'styled-components'


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

export default HomePage;
